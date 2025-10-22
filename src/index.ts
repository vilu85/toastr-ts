import { ToastMap, ToastOptions, ToastResponse, ToastType } from './types';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';
import { ToastBuilder } from './ToastBuilder';
import './index.scss';

/**
 * Main Toastr class that orchestrates toast notifications
 */
class Toastr {
	private listener: ((_response: ToastResponse) => void) | null = null;
	private toastId = 0;
	private previousToast?: string;
	private toasts: Map<number, Toast> = new Map();
	private toastContainer: ToastContainer;

	public options: ToastOptions = {};
	public version = '3.0.0';

	private toastType: Record<ToastType, ToastType> = {
		error: 'error',
		info: 'info',
		success: 'success',
		warning: 'warning',
	};

	/**
	 * Get the container element (for backward compatibility)
	 * Returns the container only if it's already been set/created by toastr
	 */
	public get container(): HTMLElement | undefined {
		return this.toastContainer.getContainer(this.getOptions(), false);
	}

	/**
	 * Set the container element (for backward compatibility)
	 */
	public set container(value: HTMLElement | undefined) {
		// Clear the reference in the container manager
		if (value === undefined) {
			this.toastContainer.clearReference();
		}
	}

	constructor(options: Partial<ToastOptions> = {}) {
		const defaultOptions = this.getDefaults();
		this.options = {
			...defaultOptions,
			...options,
		};
		this.toastContainer = new ToastContainer();
	}

	/**
	 * Create an error toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public error(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.error,
			iconClass: this.getOptions().iconClasses?.error,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create an info toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public info(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.info,
			iconClass: this.getOptions().iconClasses?.info,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create a success toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public success(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.success,
			iconClass: this.getOptions().iconClasses?.success,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Create a warning toast notification.
	 * @param message The message to be displayed.
	 * @param title The title of the toast notification.
	 * @param optionsOverride Additional options to override the defaults.
	 * @returns The created notification element or null if the notification was prevented.
	 */
	public warning(message: string, title?: string, optionsOverride?: Partial<ToastOptions>): HTMLElement | null {
		return this.notify({
			type: this.toastType.warning,
			iconClass: this.getOptions().iconClasses?.warning,
			message,
			optionsOverride,
			title,
		});
	}

	/**
	 * Remove a specific or all toast notifications.
	 * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
	 * @param clearOptions Options to override the defaults.
	 * @param clearOptions.force If true, the toast notification will be removed even if it is being hovered.
	 * @returns void
	 */
	public clear(toastElement?: HTMLElement, clearOptions?: { force?: boolean }): void {
		// Get or create container (will create if doesn't exist but element with ID exists in DOM)
		if (!this.container) {
			this.getContainer(this.getOptions(), 'ifExists');
		}

		if (toastElement) {
			const toast = this.findToastByElement(toastElement);
			if (toast) {
				toast.hide(clearOptions?.force);
			}
		} else {
			// Clear all toasts
			this.toasts.forEach((toast) => toast.hide(clearOptions?.force));
		}
	}

	/**
	 * Remove a specific or all toast notifications.
	 * @param toastElement The specific toast notification element to remove. If not provided, all toast notifications will be removed.
	 * @returns void
	 */
	public remove(toastElement?: HTMLElement | null): void {
		const options = this.getOptions();

		// Try to get existing container (won't create new one, only uses if exists in DOM)
		if (!this.container) {
			this.getContainer(options, 'ifExists');
		}

		if (toastElement) {
			// Don't remove if focused
			if (!toastElement.matches(':focus')) {
				const toast = this.findToastByElement(toastElement);
				if (toast) {
					toast.remove();
				}
			}
		} else {
			// Remove container if it has toasts
			if (this.toastContainer.hasToasts()) {
				this.toasts.forEach((toast) => toast.remove());
			}
		}
	}

	/**
	 * Subscribe to toast events
	 */
	public subscribe(callback: (_response: ToastResponse) => void): void {
		this.listener = callback;
	}

	/**
	 * Returns the container element used for the toast notifications.
	 * @param options The toast options. If not provided, the default options are used.
	 * @param create If true, the container is created if it does not exist. If 'ifExists', only returns existing container.
	 * @returns The container element.
	 */
	public getContainer(options?: ToastOptions, create: boolean | 'ifExists' = false): HTMLElement | undefined {
		if (!options) {
			options = this.getOptions();
		}
		return this.toastContainer.getContainer(options, create);
	}

	/**
	 * Create and show a toast notification
	 */
	private notify(map: ToastMap): HTMLElement | null {
		const options = this.getOptions();
		const iconClass = map?.optionsOverride?.iconClass || map.iconClass || options.iconClass;
		map.iconClass = iconClass;

		if (map.optionsOverride) {
			Object.assign(options, map.optionsOverride);
		}

		if (this.shouldExit(options, map)) {
			return null;
		}

		this.toastId++;

		// Create container
		this.toastContainer.getContainer(options, true);

		// Create toast instance
		const toast = new Toast(this.toastId, map, options, (removedToast) => this.handleToastRemoval(removedToast));

		// Add to container
		this.toastContainer.addToast(toast.element, options);

		// Store reference
		this.toasts.set(this.toastId, toast);

		// Show the toast
		toast.show();

		// Publish response
		this.publish(toast.getResponse());

		if (options.debug && console) {
			console.log(toast.getResponse());
		}

		return toast.element;
	}

	/**
	 * Handle toast removal callback
	 */
	private handleToastRemoval(toast: Toast): void {
		this.toastContainer.removeToast(toast.element);
		this.toasts.delete(toast.id);

		// Clear previous toast reference if container is empty
		if (!this.toastContainer.hasToasts()) {
			this.previousToast = undefined;
		}
	}

	/**
	 * Find toast by element
	 */
	private findToastByElement(element: HTMLElement): Toast | undefined {
		for (const toast of this.toasts.values()) {
			if (toast.element === element) {
				return toast;
			}
		}
		return undefined;
	}

	/**
	 * Check if notification should be prevented
	 */
	private shouldExit(options: ToastOptions, map: ToastMap): boolean {
		if (options.preventDuplicates && map.message === this.previousToast) {
			return true;
		}
		this.previousToast = map.message;
		return false;
	}

	/**
	 * Get merged options
	 */
	private getOptions(): ToastOptions {
		return {
			...this.getDefaults(),
			...this.options,
		};
	}

	/**
	 * Get default options
	 */
	private getDefaults(): ToastOptions {
		return {
			tapToDismiss: true,
			toastClass: 'toast',
			containerId: 'toast-container',
			debug: false,
			showMethod: 'fadeIn',
			showDuration: 300,
			showEasing: 'swing',
			onShown: undefined,
			hideMethod: 'fadeOut',
			hideDuration: 1000,
			hideEasing: 'swing',
			onHidden: undefined,
			closeMethod: 'fadeOut',
			closeDuration: 1000,
			closeEasing: 'swing',
			closeOnHover: true,
			extendedTimeOut: 1000,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning',
			},
			iconClass: 'toast-info',
			positionClass: 'toast-top-right',
			timeOut: 5000,
			titleClass: 'toast-title',
			messageClass: 'toast-message',
			escapeHtml: false,
			target: 'body',
			closeHtml: ToastBuilder.createCloseButton(),
			closeClass: 'toast-close-button',
			newestOnTop: true,
			preventDuplicates: false,
			progressBar: false,
			progressClass: 'toast-progress',
			rtl: false,
		};
	}

	/**
	 * Publish toast response to subscriber
	 */
	private publish(response: ToastResponse): void {
		if (this.listener) {
			this.listener(response);
		}
	}
}

declare global {
	interface Window {
		toastr: typeof Toastr;
	}
}

// Expose Toastr to the global window object or module.exports for Node.js
if (typeof window !== 'undefined') {
	window.toastr = Toastr;
}

export default Toastr;
