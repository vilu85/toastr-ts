/**
 * Handles toast animation logic (show/hide effects)
 */
export declare class ToastAnimator {
    /**
     * Show element with animation
     */
    static show(element: HTMLElement, method: 'fadeIn' | 'slideDown' | 'show', duration: number, easing: 'swing' | 'linear', onComplete?: () => void): void;
    /**
     * Hide element with animation
     */
    static hide(element: HTMLElement, onComplete: () => void, method?: 'fadeOut', duration?: number, easing?: 'swing' | 'linear'): void;
}
