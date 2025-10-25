import { ToastOptions, ToastResponse } from './types';
import './index.scss';
/**
 * Main Toastr class that orchestrates toast notifications
 */
declare class Toastr {
    private listener;
    private toastId;
    private previousToast?;
    private toasts;
    private toastContainer;
    options: ToastOptions;
    version: string;
    private toastType;
    /**
     * Get the container element (for backward compatibility)
     * Returns the container only if it's already been set/created by toastr
     */
    get container(): HTMLElement | undefined;
    /**
     * Set the container element (for backward compatibility)
     */
    set container(value: HTMLElement | undefined);
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
    /**
     * Subscribe to toast events
     */
    subscribe(callback: (_response: ToastResponse) => void): void;
    /**
     * Returns the container element used for the toast notifications.
     * @param options The toast options. If not provided, the default options are used.
     * @param create If true, the container is created if it does not exist. If 'ifExists', only returns existing container.
     * @returns The container element.
     */
    getContainer(options?: ToastOptions, create?: boolean | 'ifExists'): HTMLElement | undefined;
    /**
     * Create and show a toast notification
     */
    private notify;
    /**
     * Handle toast removal callback
     */
    private handleToastRemoval;
    /**
     * Find toast by element
     */
    private findToastByElement;
    /**
     * Check if notification should be prevented
     */
    private shouldExit;
    /**
     * Get merged options
     */
    private getOptions;
    /**
     * Get default options
     */
    private getDefaults;
    /**
     * Publish toast response to subscriber
     */
    private publish;
}
export default Toastr;
