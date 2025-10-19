export type ToastType = 'error' | 'info' | 'success' | 'warning';
export interface ToastOptions {
    closeButton?: boolean;
    tapToDismiss?: boolean;
    toastClass?: string | string[];
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
export interface ToastMap {
    type: ToastType;
    iconClass?: string;
    message?: string;
    optionsOverride?: Partial<ToastOptions>;
    title?: string;
}
export interface ToastResponse {
    toastId: number;
    state: 'visible' | 'hidden';
    startTime: Date;
    endTime?: Date;
    options: ToastOptions;
    map: ToastMap;
}
