import { ToastOptions } from './types';
/**
 * Manages timers and progress bar for an individual toast notification
 */
export declare class ToastTimer {
    private toastElement;
    private options;
    private onHideCallback;
    private hideTimeoutId;
    private progressIntervalId;
    private hideEta;
    private maxHideTime;
    private isPaused;
    constructor(toastElement: HTMLElement, options: ToastOptions, onHideCallback: () => void);
    /**
     * Start the hide timer and progress bar
     */
    start(): void;
    /**
     * Pause the timer (e.g., on mouseover)
     */
    pause(): void;
    /**
     * Resume the timer with extended timeout (e.g., on mouseout)
     */
    resume(): void;
    /**
     * Stop all timers
     */
    stop(): void;
    /**
     * Check if timer is currently paused
     */
    isPausedState(): boolean;
    /**
     * Start the progress bar animation
     */
    private startProgressBar;
    /**
     * Update progress bar width
     */
    private updateProgress;
}
