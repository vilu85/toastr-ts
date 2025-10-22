/**
 * Handles toast animation logic (show/hide effects)
 */
export class ToastAnimator {
	/**
	 * Show element with animation
	 */
	public static show(
		element: HTMLElement,
		method: 'fadeIn' | 'slideDown' | 'show',
		duration: number,
		easing: 'swing' | 'linear',
		onComplete?: () => void
	): void {
		if (method === 'fadeIn') {
			element.style.transition = `opacity ${duration}ms ${easing}`;
			element.style.opacity = '0';
			element.style.display = 'block';
			requestAnimationFrame(() => {
				element.style.opacity = '1';
				onComplete?.();
			});
		} else if (method === 'slideDown') {
			element.style.transition = `max-height ${duration}ms ${easing}`;
			element.style.maxHeight = '0';
			element.style.display = 'block';
			requestAnimationFrame(() => {
				element.style.maxHeight = `${element.scrollHeight}px`;
				onComplete?.();
			});
		} else {
			element.style.display = 'block';
			onComplete?.();
		}
	}

	/**
	 * Hide element with animation
	 */
	public static hide(
		element: HTMLElement,
		onComplete: () => void,
		method?: 'fadeOut',
		duration?: number,
		easing?: 'swing' | 'linear'
	): void {
		if (method === 'fadeOut' && duration) {
			element.style.transition = `opacity ${duration}ms ${easing}`;
			element.style.opacity = '1';
			requestAnimationFrame(() => (element.style.opacity = '0'));
			setTimeout(() => {
				element.style.display = 'none';
				onComplete();
			}, duration);
		} else {
			element.style.display = 'none';
			onComplete();
		}
	}
}
