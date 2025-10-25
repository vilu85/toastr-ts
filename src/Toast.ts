import { ToastMap, ToastOptions, ToastResponse } from './types';
import { ToastAnimator } from './ToastAnimator';
import { ToastTimer } from './ToastTimer';
import { ToastBuilder } from './ToastBuilder';

/**
 * Represents an individual toast notification with its own state and behavior
 */
export class Toast {
	public readonly id: number;
	public readonly element: HTMLElement;
	private readonly closeElement: HTMLElement;
	private readonly timer: ToastTimer;
	private readonly options: ToastOptions;
	private readonly map: ToastMap;
	private state: 'visible' | 'hidden' = 'visible';
	private readonly startTime: Date;
	private endTime?: Date;
	private isHovered: boolean = false;

	constructor(
		id: number,
		map: ToastMap,
		options: ToastOptions,
		private onRemoveCallback: (toast: Toast) => void
	) {
		this.id = id;
		this.map = map;
		this.options = options;
		this.startTime = new Date();

		// Build DOM elements
		const elements = ToastBuilder.build(map, options);
		this.element = elements.toastElement;
		this.closeElement = elements.closeElement;

		// Initialize timer
		this.timer = new ToastTimer(this.element, options, () => this.hide());

		// Setup event handlers
		this.setupEventHandlers();
	}

	/**
	 * Show the toast notification
	 */
	public show(): void {
		this.element.style.display = 'none';

		ToastAnimator.show(this.element, this.options.showMethod!, this.options.showDuration!, this.options.showEasing!, () => {
			this.options.onShown?.();
		});

		// Start timer immediately, not after animation
		this.timer.start();
	}

	/**
	 * Hide the toast notification
	 */
	public hide(force: boolean = false): void {
		// Don't hide if focused unless forced
		if (!force && this.element.matches(':focus')) {
			return;
		}

		this.timer.stop();

		ToastAnimator.hide(
			this.element,
			() => {
				this.remove();
				this.options.onHidden?.();
			},
			this.options.hideMethod,
			this.options.hideDuration,
			this.options.hideEasing
		);
	}

	/**
	 * Remove the toast from DOM
	 */
	public remove(): void {
		this.state = 'hidden';
		this.endTime = new Date();
		this.timer.stop();
		this.onRemoveCallback(this);
	}

	/**
	 * Get the toast response object
	 */
	public getResponse(): ToastResponse {
		return {
			toastId: this.id,
			state: this.state,
			startTime: this.startTime,
			endTime: this.endTime,
			options: this.options,
			map: this.map,
		};
	}

	/**
	 * Check if the toast element is visible in the DOM
	 */
	public isVisible(): boolean {
		if (typeof window?.getComputedStyle === 'function') {
			return (
				window.getComputedStyle(this.element).display !== 'none' &&
				window.getComputedStyle(this.element).visibility !== 'hidden' &&
				this.element.offsetWidth > 0 &&
				this.element.offsetHeight > 0
			);
		}
		return this.element && this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
	}

	/**
	 * Setup event handlers for the toast
	 */
	private setupEventHandlers(): void {
		// Hover events to pause/resume timer
		if (this.options.closeOnHover) {
			this.element.addEventListener('mouseenter', () => this.handleMouseEnter());
			this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
		}

		// Click to dismiss
		if (!this.options.onclick && this.options.tapToDismiss) {
			this.element.addEventListener('click', () => this.hide());
		}

		// Close button
		if (this.options.closeButton && this.closeElement) {
			this.closeElement.addEventListener('click', (event) => {
				event.stopPropagation();
				this.options.onCloseClick?.(event);
				this.hide();
			});
		}

		// Custom click handler
		if (this.options.onclick) {
			this.element.addEventListener('click', (event) => {
				this.options.onclick!(event);
				this.hide();
			});
		}
	}

	/**
	 * Handle mouse enter event
	 */
	private handleMouseEnter(): void {
		if (!this.isHovered) {
			this.isHovered = true;
			this.timer.pause();
		}
	}

	/**
	 * Handle mouse leave event
	 */
	private handleMouseLeave(): void {
		if (this.isHovered) {
			this.isHovered = false;
			this.timer.resume();
		}
	}
}
