import { ToastMap, ToastOptions, ToastResponse } from './types';
/**
 * Represents an individual toast notification with its own state and behavior
 */
export declare class Toast {
    private onRemoveCallback;
    readonly id: number;
    readonly element: HTMLElement;
    private readonly closeElement;
    private readonly timer;
    private readonly options;
    private readonly map;
    private state;
    private readonly startTime;
    private endTime?;
    private isHovered;
    constructor(id: number, map: ToastMap, options: ToastOptions, onRemoveCallback: (toast: Toast) => void);
    /**
     * Show the toast notification
     */
    show(): void;
    /**
     * Hide the toast notification
     */
    hide(force?: boolean): void;
    /**
     * Remove the toast from DOM
     */
    remove(): void;
    /**
     * Get the toast response object
     */
    getResponse(): ToastResponse;
    /**
     * Check if the toast element is visible in the DOM
     */
    isVisible(): boolean;
    /**
     * Setup event handlers for the toast
     */
    private setupEventHandlers;
    /**
     * Handle mouse enter event
     */
    private handleMouseEnter;
    /**
     * Handle mouse leave event
     */
    private handleMouseLeave;
}
