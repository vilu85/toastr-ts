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
declare const publicToastrAPI: {
    error: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    info: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    success: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    warning: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    clear: (toastElement: HTMLElement, clearOptions?: {
        force?: boolean;
    }) => void;
    remove: (toastElement?: HTMLElement | null) => void;
    subscribe: (callback: (response: ToastResponse) => void) => void;
    version: string;
};
export type ToastrAPI = typeof publicToastrAPI;
export {};
