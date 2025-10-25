import { ToastMap, ToastOptions } from './types';
/**
 * Builds toast DOM elements
 */
export declare class ToastBuilder {
    /**
     * Escape HTML to prevent XSS
     */
    private static escapeHtml;
    /**
     * Create close button element
     */
    static createCloseButton(): HTMLButtonElement;
    /**
     * Build a complete toast element with all its components
     */
    static build(map: ToastMap, options: ToastOptions): {
        toastElement: HTMLElement;
        titleElement: HTMLElement;
        messageElement: HTMLElement;
        progressElement: HTMLElement;
        closeElement: HTMLElement;
    };
}
