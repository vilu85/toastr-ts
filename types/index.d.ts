import { ToastOptions, ToastResponse } from './types';
import './index.scss';
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
    /**
     * Create an error toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    error(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    /**
     * Create an info toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    info(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    /**
     * Create a success toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    success(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    /**
     * Create a warning toast notification.
     * @param message The message to be displayed.
     * @param title The title of the toast notification.
     * @param optionsOverride Additional options to override the defaults.
     * @returns The created notification element or null if the notification was prevented.
     */
    warning(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null;
    /**
     * Remove a specific or all toast notifications.
     * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
     * @param clearOptions Options to override the defaults.
     * @param clearOptions.force If true, the toast notification will be removed even if it is being hovered.
     * @returns void
     */
    clear(toastElement?: HTMLElement, clearOptions?: {
        force?: boolean;
    }): void;
    /**
     * Remove a specific or all toast notifications.
     * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
     * @returns void
     */
    remove(toastElement?: HTMLElement | null): void;
    subscribe(callback: (_response: ToastResponse) => void): void;
    /**
     * Returns the container element used for the toast notifications.
     * @param options The toast options. If not provided, the default options are used.
     * @param create If true, the container is created if it does not exist.
     * @returns The container element.
     */
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
declare global {
    interface Window {
        toastr: typeof Toastr;
    }
}
export default Toastr;
