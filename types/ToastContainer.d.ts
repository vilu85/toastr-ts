import { ToastOptions } from './types';
/**
 * Manages the toast container element
 */
export declare class ToastContainer {
    private container?;
    /**
     * Get or create the container element
     * @param options Toast options
     * @param create If true, creates a new container. If 'ifExists', only uses existing elements. If false, returns current container only.
     */
    getContainer(options: ToastOptions, create?: boolean | 'ifExists'): HTMLElement | undefined;
    /**
     * Add a toast element to the container
     */
    addToast(toastElement: HTMLElement, options: ToastOptions): void;
    /**
     * Remove a toast element from the container
     */
    removeToast(toastElement: HTMLElement): void;
    /**
     * Check if element is visible
     */
    private isVisible;
    /**
     * Clear the container reference
     */
    clearReference(): void;
    /**
     * Check if container has any toasts
     */
    hasToasts(): boolean;
    /**
     * Get all toast elements in the container
     */
    getAllToasts(): HTMLElement[];
    /**
     * Create the container element
     * Note: This only creates the container if an element with the containerId already exists,
     * OR if we find it appropriate to create a new one (when explicitly requested via notify)
     */
    private createContainer;
}
