import { ToastOptions, ToastResponse } from './types';
declare class Toastr {
    container: HTMLElement;
    private listener;
    private toastId;
    private previousToast?;
    private toasts;
    options: ToastOptions;
    version: string;
    private toastType;
    constructor(options?: Partial<ToastOptions>);
    error(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    info(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    success(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    warning(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    clear(toastElement?: HTMLElement, clearOptions?: {
        force?: boolean;
    }): void;
    remove(toastElement?: HTMLElement | null): void;
    subscribe(callback: (_response: ToastResponse) => void): void;
    getContainer(options?: ToastOptions, create?: boolean): HTMLElement;
    private createContainer;
    private notify;
    private personalizeToast;
    private escapeHtml;
    private displayToast;
    private showElement;
    private hideToast;
    private hideElement;
    private handleEvents;
    private updateProgress;
    private shouldExit;
    private clearToast;
    private clearContainer;
    private removeToast;
    private getOptions;
    private createCloseBtn;
    private getDefaults;
    private publish;
    private stickAround;
    private delayedHideToast;
    private isVisible;
}
declare const publicToastrAPI: {
    error: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    info: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    success: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    warning: (message: string, title?: string, optionsOverride?: Partial<ToastOptions>) => HTMLElement | null;
    clear: (toastElement?: HTMLElement, clearOptions?: {
        force?: boolean;
    }) => void;
    remove: (toastElement?: HTMLElement | null) => void;
    subscribe: (callback: (_response: ToastResponse) => void) => void;
    version: string;
};
export type ToastrAPI = typeof publicToastrAPI;
export default Toastr;
