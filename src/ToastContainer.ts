import { ToastOptions } from './types';

/**
 * Manages the toast container element
 */
export class ToastContainer {
	private container?: HTMLElement;

	/**
	 * Get or create the container element
	 * @param options Toast options
	 * @param create If true, creates a new container. If 'ifExists', only uses existing elements. If false, returns current container only.
	 */
	public getContainer(options: ToastOptions, create: boolean | 'ifExists' = false): HTMLElement | undefined {
		// Check if container exists in memory and is still in DOM
		if (this.container && this.container.parentNode) {
			return this.container;
		}

		// Container was removed from DOM, clear reference
		if (this.container && !this.container.parentNode) {
			this.container = undefined;
		}

		// If not creating and not checking for existing, just return current state
		if (create === false) {
			return this.container;
		}

		// Try to find existing container in DOM (for 'ifExists' or true)
		const existingContainer = document.getElementById(options.containerId!);
		if (existingContainer) {
			this.container = existingContainer;
			return this.container;
		}

		// Create new container only if explicitly requested with true (not 'ifExists')
		if (create === true) {
			this.container = this.createContainer(options);
		}

		return this.container;
	}

	/**
	 * Add a toast element to the container
	 */
	public addToast(toastElement: HTMLElement, options: ToastOptions): void {
		if (!this.container) {
			this.getContainer(options, true);
		}

		if (options.newestOnTop) {
			this.container?.prepend(toastElement);
		} else {
			this.container?.append(toastElement);
		}
	}

	/**
	 * Remove a toast element from the container
	 */
	public removeToast(toastElement: HTMLElement): void {
		// Only remove if element is no longer visible
		if (!this.isVisible(toastElement)) {
			toastElement.remove();

			// Note: We don't remove the empty container here anymore.
			// The container persists to match expected behavior.
			// It can be removed explicitly via clearReference() if needed.
		}
	}

	/**
	 * Check if element is visible
	 */
	private isVisible(elem: HTMLElement): boolean {
		if (typeof window?.getComputedStyle === 'function') {
			return (
				window.getComputedStyle(elem).display !== 'none' &&
				window.getComputedStyle(elem).visibility !== 'hidden' &&
				elem.offsetWidth > 0 &&
				elem.offsetHeight > 0
			);
		}
		return elem && elem.offsetWidth > 0 && elem.offsetHeight > 0;
	}

	/**
	 * Clear the container reference
	 */
	public clearReference(): void {
		this.container = undefined;
	}

	/**
	 * Check if container has any toasts
	 */
	public hasToasts(): boolean {
		return this.container ? this.container.children.length > 0 : false;
	}

	/**
	 * Get all toast elements in the container
	 */
	public getAllToasts(): HTMLElement[] {
		if (!this.container) {
			return [];
		}
		return Array.from(this.container.children) as HTMLElement[];
	}

	/**
	 * Create the container element
	 * Note: This only creates the container if an element with the containerId already exists,
	 * OR if we find it appropriate to create a new one (when explicitly requested via notify)
	 */
	private createContainer(options: ToastOptions): HTMLElement | undefined {
		// Check if an element with this ID already exists
		const existingElement = document.getElementById(options.containerId!);
		if (existingElement) {
			// Element exists, enhance it with our class and return it
			if (!existingElement.classList.contains(options.positionClass!.split(' ')[0])) {
				existingElement.className = options.positionClass!;
			}
			return existingElement;
		}

		const target = document.querySelector(options.target!);
		if (!target) {
			// Target doesn't exist, cannot create container
			return undefined;
		}

		const container = document.createElement('div');
		container.id = options.containerId!;
		container.className = options.positionClass!;
		target.appendChild(container);
		return container;
	}
}
