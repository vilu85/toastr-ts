type ToastType = 'error' | 'info' | 'success' | 'warning';

interface ToastOptions {
    closeButton?: boolean;
    tapToDismiss?: boolean;
    toastClass?: string;
    containerId?: string;
    debug?: boolean;
    showMethod?: 'fadeIn' | 'slideDown' | 'show';
    showDuration?: number;
    showEasing?: 'swing' | 'linear';
    onShown?: () => void;
    hideMethod?: 'fadeOut';
    hideDuration?: number;
    hideEasing?: 'swing' | 'linear';
    onHidden?: () => void;
    closeMethod?: 'fadeOut';
    closeDuration?: number;
    closeEasing?: 'swing' | 'linear';
    closeOnHover?: boolean;
    extendedTimeOut?: number;
    iconClasses?: Record<ToastType, string>;
    iconClass?: string;
    positionClass?: string;
    timeOut?: number;
    titleClass?: string;
    messageClass?: string;
    escapeHtml?: boolean;
    target?: string;
    closeHtml?: HTMLElement;
    closeClass?: string;
    newestOnTop?: boolean;
    preventDuplicates?: boolean;
    progressBar?: boolean;
    progressClass?: string;
    rtl?: boolean;
    onCloseClick?: (event: Event) => void;
    onclick?: (event: Event) => void;
}

interface ToastMap {
    type: ToastType;
    iconClass?: string;
    message?: string;
    optionsOverride?: Partial<ToastOptions>;
    title?: string;
}

interface ToastResponse {
    toastId: number;
    state: 'visible' | 'hidden';
    startTime: Date;
    endTime?: Date;
    options: ToastOptions;
    map: ToastMap;
}

class Toastr {
    private $container: HTMLElement | null = null;
    private listener: ((response: ToastResponse) => void) | null = null;
    private toastId = 0;
    private previousToast?: string;

    public options: ToastOptions = {};
    public version = '3.0.0';

    private toastType: Record<ToastType, ToastType> = {
        error: 'error',
        info: 'info',
        success: 'success',
        warning: 'warning',
    };

    public error(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
        return this.notify({
            type: this.toastType.error,
            iconClass: this.getOptions().iconClasses?.error,
            message,
            optionsOverride,
            title,
        });
    }

    public info(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
        return this.notify({
            type: this.toastType.info,
            iconClass: this.getOptions().iconClasses?.info,
            message,
            optionsOverride,
            title,
        });
    }

    public success(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
        return this.notify({
            type: this.toastType.success,
            iconClass: this.getOptions().iconClasses?.success,
            message,
            optionsOverride,
            title,
        });
    }

    public warning(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
        return this.notify({
            type: this.toastType.warning,
            iconClass: this.getOptions().iconClasses?.warning,
            message,
            optionsOverride,
            title,
        });
    }

    public clear(toastElement: HTMLElement, clearOptions?: { force?: boolean }): void {
        const options = this.getOptions();
        if (!this.$container) {
            this.getContainer(options);
        }
        if (!this.clearToast(toastElement, options, clearOptions)) {
            this.clearContainer(options);
        }
    }

    public remove(toastElement?: HTMLElement | null): void {
        const options = this.getOptions();
        if (!this.$container) {
            this.getContainer(options);
        }
        if (toastElement && !toastElement.matches(':focus')) {
            this.removeToast(toastElement);
            return;
        }
        if (this.$container?.children.length) {
            this.$container.remove();
        }
    }

    public subscribe(callback: (response: ToastResponse) => void): void {
        this.listener = callback;
    }

    private getContainer(options?: ToastOptions, create: boolean = false): HTMLElement | null {
        if (!options) {
            options = this.getOptions();
        }
        this.$container = document.getElementById(options.containerId!);
        if (this.$container) {
            return this.$container;
        }
        if (create) {
            this.$container = this.createContainer(options);
        }
        return this.$container;
    }

    private createContainer(options: ToastOptions): HTMLElement {
        const container = document.createElement('div');
        container.id = options.containerId!;
        container.className = options.positionClass!;
        document.querySelector(options.target!)?.appendChild(container);
        return container;
    }

    private notify(map: ToastMap): HTMLElement | null {
        const options = this.getOptions();
        const iconClass = map?.optionsOverride?.iconClass || map.iconClass || options.iconClass;
        map.iconClass = iconClass;

        if (map.optionsOverride) {
            Object.assign(options, map.optionsOverride);
        }

        if (this.shouldExit(options, map)) {
            return null;
        }

        this.toastId++;

        // Create container
        this.getContainer(options, true);
        
        let intervalId: number | null = null;
        const $toastElement = document.createElement('div');
        const $titleElement = document.createElement('div');
        const $messageElement = document.createElement('div');
        const $progressElement = document.createElement('div');
        const $closeElement = options?.closeHtml || document.createElement('div');

        const progressBar = {
            intervalId: null as unknown as number,
            hideEta: null as unknown as number,
            maxHideTime: null as unknown as number,
        };

        const response: ToastResponse = {
            toastId: this.toastId,
            state: 'visible',
            startTime: new Date(),
            options,
            map,
        };

        this.personalizeToast($toastElement, $titleElement, $messageElement, $progressElement, $closeElement, map, options);
        intervalId = this.displayToast($toastElement, options, intervalId, progressBar);
        this.handleEvents($toastElement, $closeElement, options, progressBar, intervalId);
        this.publish(response);

        if (options.debug && console) {
            console.log(response);
        }

        return $toastElement;
    }

    private personalizeToast(
        $toastElement: HTMLElement,
        $titleElement: HTMLElement,
        $messageElement: HTMLElement,
        $progressElement: HTMLElement,
        $closeElement: HTMLElement,
        map: ToastMap,
        options: ToastOptions
    ): void {
        if (map.iconClass) {
            $toastElement.classList.add(options.toastClass!, map.iconClass);
        }
        if (map.title) {
            $titleElement.className = options.titleClass!;
            $titleElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.title) : map.title;
            $toastElement.appendChild($titleElement);
        }
        if (map.message) {
            $messageElement.className = options.messageClass!;
            $messageElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.message!) : map.message!;
            $toastElement.appendChild($messageElement);
        }
        if (options.closeButton) {
            $closeElement.className = options.closeClass!;
            $closeElement.setAttribute('role', 'button');
            $closeElement.innerHTML = options.closeHtml!.innerHTML;
            $toastElement.appendChild($closeElement);
        }
        if (options.progressBar) {
            $progressElement.className = options.progressClass!;
            $toastElement.appendChild($progressElement);
        }
        if (options.rtl) {
            $toastElement.classList.add('rtl');
        }
        if (options.newestOnTop) {
            this.$container?.prepend($toastElement);
        } else {
            this.$container?.append($toastElement);
        }

        let ariaValue = '';
        switch (map.iconClass) {
            case 'toast-success':
            case 'toast-info':
                ariaValue =  'polite';
                break;
            default:
                ariaValue = 'assertive';
        }
        $toastElement.setAttribute('aria-live', ariaValue);
    }

    private escapeHtml(source: string): string {
        return source
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    private displayToast(
        $toastElement: HTMLElement,
        options: ToastOptions,
        intervalId: number | null,
        progressBar: { intervalId: number; hideEta: number; maxHideTime: number }
    ): number | null {
        $toastElement.style.display = 'none';
        this.showElement($toastElement, options.showMethod!, options.showDuration!, options.showEasing!);

        if (options.timeOut! > 0) {
            intervalId = window.setTimeout(() => this.hideToast($toastElement, options, progressBar, intervalId!), options.timeOut!);
            progressBar.maxHideTime = options.timeOut!;
            progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
            if (options.progressBar) {
                progressBar.intervalId = window.setInterval(() => this.updateProgress($toastElement, progressBar), 10);
            }
        }

        return intervalId;
    }

    private showElement(
        element: HTMLElement,
        method: 'fadeIn' | 'slideDown' | 'show',
        duration: number,
        easing: 'swing' | 'linear'
    ): void {
        if (method === 'fadeIn') {
            element.style.transition = `opacity ${duration}ms ${easing}`;
            element.style.opacity = '0';
            element.style.display = 'block';
            requestAnimationFrame(() => (element.style.opacity = '1'));
        } else if (method === 'slideDown') {
            element.style.transition = `max-height ${duration}ms ${easing}`;
            element.style.maxHeight = '0';
            element.style.display = 'block';
            requestAnimationFrame(() => (element.style.maxHeight = `${element.scrollHeight}px`));
        } else {
            element.style.display = 'block';
        }
    }

    private hideToast(
        $toastElement: HTMLElement,
        options: ToastOptions,
        progressBar: { intervalId: number; hideEta: number; maxHideTime: number },
        intervalId: number | null,
    ): void {
        this.hideElement($toastElement, options.hideMethod!, options.hideDuration!, options.hideEasing!, () => {
            this.removeToast($toastElement);
            if (options.onHidden) {
                options.onHidden();
            }
            if(intervalId) {
                clearTimeout(intervalId);
            }
            // if (options.onHidden && response.state !== 'hidden') {
            //     options.onHidden();
            // }
            // response.state = 'hidden';
            // response.endTime = new Date();
            // publish(response);
        });
        clearTimeout(progressBar.intervalId);
    }

    private hideElement(
        element: HTMLElement,
        method: 'fadeOut',
        duration: number,
        easing: 'swing' | 'linear',
        onComplete: () => void,
    ): void {
        if (method === 'fadeOut') {
            element.style.transition = `opacity ${duration}ms ${easing}`;
            element.style.opacity = '1';
            requestAnimationFrame(() => (element.style.opacity = '0'));
            setTimeout(() => {element.style.display = 'none'; onComplete();}, duration);
        } else {
            element.style.display = 'none';
            onComplete();
        }
    }

    private handleEvents(
        $toastElement: HTMLElement,
        $closeElement: HTMLElement,
        options: ToastOptions,
        progressBar: { intervalId: number; hideEta: number; maxHideTime: number },
        intervalId: number | null,
    ): void {
        if (options.closeOnHover) {
            $toastElement.addEventListener('mouseover', () => this.stickAround(progressBar, intervalId));
            $toastElement.addEventListener('mouseout', () => this.delayedHideToast($toastElement, options, progressBar, intervalId));
        }

        if (!options.onclick && options.tapToDismiss) {
            $toastElement.addEventListener('click', () => this.hideToast($toastElement, options, progressBar, intervalId));
        }

        if (options.closeButton && $closeElement) {
            $closeElement.addEventListener('click', (event) => {
                if(event?.stopPropagation) {
                    event.stopPropagation();
                } else if(event?.cancelBubble) {
                    event.cancelBubble = true;
                }

                if (options.onCloseClick) {
                    options.onCloseClick(event);
                }

                this.hideToast($toastElement, options, progressBar, intervalId);
            });
        }

        if (options.onclick) {
            $toastElement.addEventListener('click', (event) => {
                options.onclick!(event);
                this.hideToast($toastElement, options, progressBar, intervalId);
            });
        }
    }

    private updateProgress($toastElement: HTMLElement, progressBar: { hideEta: number; maxHideTime: number }): void {
        const percentage = ((progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime) * 100;
        const $progressElement = $toastElement.querySelector(`.${this.getOptions().progressClass}`) as HTMLElement;
        if ($progressElement) {
            $progressElement.style.width = `${percentage}%`;
        }
    }

    private shouldExit(options: ToastOptions, map: ToastMap): boolean {
        if (options.preventDuplicates && map.message === this.previousToast) {
            return true;
        }
        this.previousToast = map.message;
        return false;
    }

    private clearToast(toastElement: HTMLElement | null, options: ToastOptions, clearOptions?: { force?: boolean }): boolean {
        const force = clearOptions?.force || false;
        if (toastElement && (force || !toastElement.matches(':focus'))) {
            this.hideElement(toastElement, options.hideMethod!, options.hideDuration!, options.hideEasing!, () => { this.removeToast(toastElement); });
            return true;
        }
        return false;
    }

    private clearContainer(options: ToastOptions): void {
        const toastsToClear = Array.from(this.$container!.children);
        for (let i = toastsToClear.length - 1; i >= 0; i--) {
            this.clearToast(toastsToClear[i] as HTMLElement, options);
        }
    }

    private removeToast(toastElement: HTMLElement): void {
        if (!this.$container) {
            this.getContainer();
        }
        if (!this.isVisible(toastElement)) {
            toastElement.remove();
            if (!this.$container?.children.length) {
                this.$container!.remove();
                this.previousToast = undefined;
            }
        }
    }

    private getOptions(): ToastOptions {
        return {
            ...this.getDefaults(),
            ...this.options,
        };
    }

    private createCloseBtn = (): HTMLButtonElement => {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.innerHTML = '&times;';
        return btn;
    }

    private getDefaults(): ToastOptions {
        return {
            tapToDismiss: true,
            toastClass: 'toastr',
            containerId: 'toastr-container',
            debug: false,
            showMethod: 'fadeIn',
            showDuration: 300,
            showEasing: 'swing',
            onShown: undefined,
            hideMethod: 'fadeOut',
            hideDuration: 1000,
            hideEasing: 'swing',
            onHidden: undefined,
            closeMethod: 'fadeOut',
            closeDuration: 1000,
            closeEasing: 'swing',
            closeOnHover: true,
            extendedTimeOut: 1000,
            iconClasses: {
                error: "toastr-error",
                info: "toastr-info",
                success: "toastr-success",
                warning: "toastr-warning",
            },
            iconClass: 'toastr-info',
            positionClass: 'toastr-top-right',
            timeOut: 5000,
            titleClass: 'toastr-title',
            messageClass: 'toastr-message',
            escapeHtml: false,
            target: 'body',
            closeHtml: this.createCloseBtn(),
            closeClass: 'toastr-close-button',
            newestOnTop: true,
            preventDuplicates: false,
            progressBar: false,
            progressClass: 'toastr-progress',
            rtl: false,
        };
    }

    private publish(response: ToastResponse): void {
        if (this.listener) {
            this.listener(response);
        }
    }

    private stickAround(progressBar: { hideEta: number }, intervalId: number | null): void {
        if(intervalId) {
            clearTimeout(intervalId);
        }
        progressBar.hideEta = 0;
    }

    private delayedHideToast(
        $toastElement: HTMLElement,
        options: ToastOptions,
        progressBar: { hideEta: number; maxHideTime: number, intervalId: number },
        intervalId: number | null
    ): void {
        if (options.timeOut! > 0 || options.extendedTimeOut! > 0) {
            intervalId = window.setTimeout(() => this.hideToast($toastElement, options, progressBar, intervalId), options.extendedTimeOut!);
            progressBar.maxHideTime = options.extendedTimeOut!;
            progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
        }
    }

    private isVisible(elem?: HTMLElement) {
        if (elem) {
            if (typeof window?.getComputedStyle === 'function') {
                return window.getComputedStyle(elem).display !== 'none' &&
                    window.getComputedStyle(elem).visibility !== 'hidden' &&
                    elem.offsetWidth > 0 && elem.offsetHeight > 0;

            } else {
                return elem && elem.offsetWidth > 0 && elem.offsetHeight > 0;
            }
        }
        return false;
    }
}

// Create an instance of the class
const toastrInstance = new Toastr();

// Define the public API object
const publicToastrAPI = {
    error: toastrInstance.error.bind(toastrInstance),
    info: toastrInstance.info.bind(toastrInstance),
    success: toastrInstance.success.bind(toastrInstance),
    warning: toastrInstance.warning.bind(toastrInstance),
    clear: toastrInstance.clear.bind(toastrInstance),
    remove: toastrInstance.remove.bind(toastrInstance),
    subscribe: toastrInstance.subscribe.bind(toastrInstance),
    version: toastrInstance.version
};
export type ToastrAPI = typeof publicToastrAPI;

// Expose Toastr to the global window object or module.exports for Node.js
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = toastr;
// } else {
window.toastr = publicToastrAPI;
// }

