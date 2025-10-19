import { ToastMap, ToastOptions, ToastResponse, ToastType } from './types';
import './index.scss';

class Toastr {
	public container!: HTMLElement;
	private listener: ((_response: ToastResponse) => void) | null = null;
	private toastId = 0;
	private previousToast?: string;
	private toasts: { [id: number]: HTMLElement } = {};

	public options: ToastOptions = {};
	public version = '3.0.0';

	private toastType: Record<ToastType, ToastType> = {
		error: 'error',
		info: 'info',
		success: 'success',
		warning: 'warning',
	};

	constructor(options: Partial<ToastOptions> = {}) {
		const defaultOptions = this.getDefaults();
		this.options = {
			...defaultOptions,
			...options,
		};
	}

	/**
	 * Create an error toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public error(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.error,
			iconClass: this.getOptions().iconClasses?.error,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create an info toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public info(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.info,
			iconClass: this.getOptions().iconClasses?.info,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create a success toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public success(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.success,
			iconClass: this.getOptions().iconClasses?.success,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create a warning toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public warning(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.warning,
			iconClass: this.getOptions().iconClasses?.warning,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Remove a specific or all toast notifications.
	 * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
	 * @param clearOptions Options to override the defaults.
	 * @param clearOptions.force If true, the toast notification will be removed even if it is being hovered.
	 * @returns void
	 */
	public clear(toastElement?: HTMLElement, clearOptions?: { force?: boolean }): void {
		const options = this.getOptions();
		if (!this.container) {
			this.getContainer(options);
		}
		if (!this.clearToast(toastElement, options, clearOptions)) {
			this.clearContainer(options);
		}
	}

	/**
	 * Remove a specific or all toast notifications.
	 * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
	 * @returns void
	 */
	public remove(toastElement?: HTMLElement | null): void {
		const options = this.getOptions();
		if (!this.container) {
			this.getContainer(options);
		}
		if (toastElement && !toastElement.matches(':focus')) {
			this.removeToast(toastElement);
			return;
		}
		if (this.container?.children.length) {
			this.container.remove();
		}
	}

	public subscribe(callback: (_response: ToastResponse) => void): void {
		this.listener = callback;
	}

	/**
	 * Returns the container element used for the toast notifications.
	 * @param options The toast options. If not provided, the default options are used.
	 * @param create If true, the container is created if it does not exist.
	 * @returns The container element.
	 */
	public getContainer(options?: ToastOptions, create: boolean = false): HTMLElement {
		if (!options) {
			options = this.getOptions();
		}
		if (!this.container) {
			const oldContainer = document.getElementById(options.containerId!);
			if (oldContainer) {
				this.container = oldContainer;
				return oldContainer;
			}
		}
		if (this.container) {
			return this.container;
		}
		if (create) {
			this.container = this.createContainer(options);
		}
		return this.container;
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
		const toastElement = document.createElement('div');
		const titleElement = document.createElement('div');
		const messageElement = document.createElement('div');
		const progressElement = document.createElement('div');
		const closeElement = options?.closeHtml || document.createElement('div');

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

		this.personalizeToast(toastElement, titleElement, messageElement, progressElement, closeElement, map, options);
		intervalId = this.displayToast(toastElement, options, intervalId, progressBar, options.onShown);
		this.handleEvents(toastElement, closeElement, options, progressBar, intervalId);
		this.publish(response);

		if (options.debug && console) {
			console.log(response);
		}
		this.toasts[this.toastId] = toastElement;

		return toastElement;
	}

	private personalizeToast(
		toastElement: HTMLElement,
		titleElement: HTMLElement,
		messageElement: HTMLElement,
		progressElement: HTMLElement,
		closeElement: HTMLElement,
		map: ToastMap,
		options: ToastOptions
	): void {
		if (map.iconClass) {
			if (typeof options.toastClass === 'string') {
				options.toastClass!.split(' ').forEach((className) => toastElement.classList.add(className));
			} else if (Array.isArray(options.toastClass)) {
				options.toastClass.forEach((value) => toastElement.classList.add(value));
			}

			toastElement.classList.add(map.iconClass);
		}
		if (map.title) {
			titleElement.className = options.titleClass!;
			titleElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.title) : map.title;
			toastElement.appendChild(titleElement);
		}
		if (map.message) {
			messageElement.className = options.messageClass!;
			messageElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.message!) : map.message!;
			toastElement.appendChild(messageElement);
		}
		if (options.closeButton) {
			closeElement.className = options.closeClass!;
			closeElement.setAttribute('role', 'button');
			closeElement.innerHTML = options.closeHtml!.innerHTML;
			toastElement.appendChild(closeElement);
		}
		if (options.progressBar) {
			progressElement.className = options.progressClass!;
			toastElement.appendChild(progressElement);
		}
		if (options.rtl) {
			toastElement.classList.add('rtl');
		}
		if (options.newestOnTop) {
			this.container?.prepend(toastElement);
		} else {
			this.container?.append(toastElement);
		}

		let ariaValue = '';
		switch (map.iconClass) {
			case 'toast-success':
			case 'toast-info':
				ariaValue = 'polite';
				break;
			default:
				ariaValue = 'assertive';
		}
		toastElement.setAttribute('aria-live', ariaValue);
	}

	private escapeHtml(source: string): string {
		return source.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	private displayToast(
		toastElement: HTMLElement,
		options: ToastOptions,
		intervalId: number | null,
		progressBar: {
			intervalId: number;
			hideEta: number;
			maxHideTime: number;
		},
		onShown?: () => void
	): number | null {
		toastElement.style.display = 'none';
		this.showElement(toastElement, options.showMethod!, options.showDuration!, options.showEasing!, onShown);

		if (options.timeOut! > 0) {
			intervalId = window.setTimeout(() => this.hideToast(toastElement, options, progressBar, intervalId!), options.timeOut!);
			progressBar.maxHideTime = options.timeOut!;
			progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
			if (options.progressBar) {
				progressBar.intervalId = window.setInterval(() => this.updateProgress(toastElement, progressBar), 10);
			}
		}

		return intervalId;
	}

	private showElement(
		element: HTMLElement,
		method: 'fadeIn' | 'slideDown' | 'show',
		duration: number,
		easing: 'swing' | 'linear',
		onShown?: () => void
	): void {
		if (method === 'fadeIn') {
			element.style.transition = `opacity ${duration}ms ${easing}`;
			element.style.opacity = '0';
			element.style.display = 'block';
			requestAnimationFrame(() => {
				element.style.opacity = '1';
				onShown?.();
			});
		} else if (method === 'slideDown') {
			element.style.transition = `max-height ${duration}ms ${easing}`;
			element.style.maxHeight = '0';
			element.style.display = 'block';
			requestAnimationFrame(() => {
				element.style.maxHeight = `${element.scrollHeight}px`;
				onShown?.();
			});
		} else {
			element.style.display = 'block';
			onShown?.();
		}
	}

	private hideToast(
		toastElement: HTMLElement,
		options: ToastOptions,
		progressBar: { intervalId: number; hideEta: number; maxHideTime: number },
		intervalId: number | null
	): void {
		this.hideElement(
			toastElement,
			() => {
				this.removeToast(toastElement);
				if (options?.onHidden) {
					options.onHidden();
				}
				if (intervalId) {
					clearTimeout(intervalId);
				}
				// if (options.onHidden && response.state !== 'hidden') {
				//     options.onHidden();
				// }
				// response.state = 'hidden';
				// response.endTime = new Date();
				// publish(response);
			},
			options.hideMethod,
			options.hideDuration,
			options.hideEasing
		);
		clearTimeout(progressBar.intervalId);
	}

	private hideElement(
		element: HTMLElement,
		onComplete: () => void,
		method?: 'fadeOut',
		duration?: number,
		easing?: 'swing' | 'linear'
	): void {
		if (method === 'fadeOut') {
			element.style.transition = `opacity ${duration}ms ${easing}`;
			element.style.opacity = '1';
			requestAnimationFrame(() => (element.style.opacity = '0'));
			setTimeout(() => {
				element.style.display = 'none';
				onComplete();
			}, duration);
		} else {
			element.style.display = 'none';
			onComplete();
		}
	}

	private handleEvents(
		toastElement: HTMLElement,
		closeElement: HTMLElement,
		options: ToastOptions,
		progressBar: { intervalId: number; hideEta: number; maxHideTime: number },
		intervalId: number | null
	): void {
		if (options.closeOnHover) {
			toastElement.addEventListener('mouseover', () => this.stickAround(progressBar, intervalId));
			toastElement.addEventListener('mouseout', () => this.delayedHideToast(toastElement, options, progressBar, intervalId));
		}

		if (!options.onclick && options.tapToDismiss) {
			toastElement.addEventListener('click', () => this.hideToast(toastElement, options, progressBar, intervalId));
		}

		if (options.closeButton && closeElement) {
			closeElement.addEventListener('click', (event) => {
				if (event?.stopPropagation) {
					event.stopPropagation();
				} else if (event?.cancelBubble) {
					event.cancelBubble = true;
				}

				if (options.onCloseClick) {
					options.onCloseClick(event);
				}

				this.hideToast(toastElement, options, progressBar, intervalId);
			});
		}

		if (options.onclick) {
			toastElement.addEventListener('click', (event) => {
				options.onclick!(event);
				this.hideToast(toastElement, options, progressBar, intervalId);
			});
		}
	}

	private updateProgress($toastElement: HTMLElement, progressBar: { hideEta: number; maxHideTime: number }): void {
		const percentage = ((progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime) * 100;
		const progressElement = $toastElement.querySelector(`.${this.getOptions().progressClass}`) as HTMLElement;
		if (progressElement) {
			progressElement.style.width = `${percentage}%`;
		}
	}

	private shouldExit(options: ToastOptions, map: ToastMap): boolean {
		if (options.preventDuplicates && map.message === this.previousToast) {
			return true;
		}
		this.previousToast = map.message;
		return false;
	}

	private clearToast(toastElement?: HTMLElement | null, options?: ToastOptions, clearOptions?: { force?: boolean }): boolean {
		const force = clearOptions?.force || false;
		if (toastElement && (force || !toastElement.matches(':focus'))) {
			this.hideElement(
				toastElement,
				() => {
					this.removeToast(toastElement);
				},
				options?.hideMethod,
				options?.hideDuration,
				options?.hideEasing
			);
			return true;
		}
		return false;
	}

	private clearContainer(options: ToastOptions): void {
		const toastsToClear = Array.from(this.container!.children);
		for (let i = toastsToClear.length - 1; i >= 0; i--) {
			this.clearToast(toastsToClear[i] as HTMLElement, options);
		}
	}

	private removeToast(toastElement: HTMLElement): void {
		if (!this.container) {
			this.getContainer();
		}
		if (!this.isVisible(toastElement)) {
			toastElement.remove();
			if (!this.container?.children.length) {
				this.container!.remove();
				this.previousToast = undefined;
			}
		}
		if (this.toasts?.[this.toastId]) {
			delete this.toasts[this.toastId];
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
	};

	private getDefaults(): ToastOptions {
		return {
			tapToDismiss: true,
			toastClass: 'toast',
			containerId: 'toast-container',
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
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning',
			},
			iconClass: 'toast-info',
			positionClass: 'toast-top-right',
			timeOut: 5000,
			titleClass: 'toast-title',
			messageClass: 'toast-message',
			escapeHtml: false,
			target: 'body',
			closeHtml: this.createCloseBtn(),
			closeClass: 'toast-close-button',
			newestOnTop: true,
			preventDuplicates: false,
			progressBar: false,
			progressClass: 'toast-progress',
			rtl: false,
		};
	}

	private publish(response: ToastResponse): void {
		if (this.listener) {
			this.listener(response);
		}
	}

	private stickAround(progressBar: { hideEta: number }, intervalId: number | null): void {
		if (intervalId) {
			clearTimeout(intervalId);
		}
		progressBar.hideEta = 0;
	}

	private delayedHideToast(
		$toastElement: HTMLElement,
		options: ToastOptions,
		progressBar: { hideEta: number; maxHideTime: number; intervalId: number },
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
				return (
					window.getComputedStyle(elem).display !== 'none' &&
					window.getComputedStyle(elem).visibility !== 'hidden' &&
					elem.offsetWidth > 0 &&
					elem.offsetHeight > 0
				);
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
	version: toastrInstance.version,
};

export type ToastrAPI = typeof publicToastrAPI;

declare global {
	interface Window {
		toastr: ToastrAPI;
	}
}

// Expose Toastr to the global window object or module.exports for Node.js
if (typeof window !== 'undefined') {
	window.toastr = publicToastrAPI;
}

export default Toastr;
