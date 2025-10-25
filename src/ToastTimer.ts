import { ToastOptions } from './types';

/**
 * Manages timers and progress bar for an individual toast notification
 */
export class ToastTimer {
	private hideTimeoutId: number | null = null;
	private progressIntervalId: number | null = null;
	private hideEta: number = 0;
	private maxHideTime: number = 0;
	private isPaused: boolean = false;

	constructor(
		private toastElement: HTMLElement,
		private options: ToastOptions,
		private onHideCallback: () => void
	) {}

	/**
	 * Start the hide timer and progress bar
	 */
	public start(): void {
		if (this.options.timeOut! > 0) {
			this.maxHideTime = this.options.timeOut!;
			this.hideEta = Date.now() + this.maxHideTime;

			this.hideTimeoutId = window.setTimeout(() => {
				if (!this.isPaused) {
					this.onHideCallback();
				}
			}, this.options.timeOut!);

			if (this.options.progressBar) {
				this.startProgressBar();
			}
		}
	}

	/**
	 * Pause the timer (e.g., on mouseover)
	 */
	public pause(): void {
		if (this.hideTimeoutId) {
			clearTimeout(this.hideTimeoutId);
			this.hideTimeoutId = null;
		}

		if (this.progressIntervalId) {
			clearInterval(this.progressIntervalId);
			this.progressIntervalId = null;
		}

		this.isPaused = true;
		this.hideEta = 0;
	}

	/**
	 * Resume the timer with extended timeout (e.g., on mouseout)
	 */
	public resume(): void {
		const timeout = this.options.extendedTimeOut! > 0 ? this.options.extendedTimeOut! : this.options.timeOut!;

		if (timeout > 0) {
			this.maxHideTime = timeout;
			this.hideEta = Date.now() + this.maxHideTime;

			this.hideTimeoutId = window.setTimeout(() => {
				this.onHideCallback();
			}, timeout);

			if (this.options.progressBar) {
				this.startProgressBar();
			}

			this.isPaused = false;
		}
	}

	/**
	 * Stop all timers
	 */
	public stop(): void {
		if (this.hideTimeoutId) {
			clearTimeout(this.hideTimeoutId);
			this.hideTimeoutId = null;
		}

		if (this.progressIntervalId) {
			clearInterval(this.progressIntervalId);
			this.progressIntervalId = null;
		}
	}

	/**
	 * Check if timer is currently paused
	 */
	public isPausedState(): boolean {
		return this.isPaused;
	}

	/**
	 * Start the progress bar animation
	 */
	private startProgressBar(): void {
		if (this.progressIntervalId) {
			clearInterval(this.progressIntervalId);
		}

		this.progressIntervalId = window.setInterval(() => {
			this.updateProgress();
		}, 10);
	}

	/**
	 * Update progress bar width
	 */
	private updateProgress(): void {
		const percentage = ((this.hideEta - Date.now()) / this.maxHideTime) * 100;
		const progressElement = this.toastElement.querySelector(`.${this.options.progressClass}`) as HTMLElement;

		if (progressElement) {
			progressElement.style.width = `${Math.max(0, percentage)}%`;
		}
	}
}
