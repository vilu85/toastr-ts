import { ToastMap, ToastOptions } from './types';

/**
 * Builds toast DOM elements
 */
export class ToastBuilder {
    /**
     * Escape HTML to prevent XSS
     */
    private static escapeHtml(source: string): string {
        return source
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /**
     * Create close button element
     */
    public static createCloseButton(): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.innerHTML = '&times;';
        return btn;
    }

    /**
     * Build a complete toast element with all its components
     */
    public static build(map: ToastMap, options: ToastOptions): {
        toastElement: HTMLElement;
        titleElement: HTMLElement;
        messageElement: HTMLElement;
        progressElement: HTMLElement;
        closeElement: HTMLElement;
    } {
        const toastElement = document.createElement('div');
        const titleElement = document.createElement('div');
        const messageElement = document.createElement('div');
        const progressElement = document.createElement('div');
        const closeElement = options?.closeHtml || document.createElement('div');

        // Apply toast classes
        if (map.iconClass) {
            if (typeof options.toastClass === 'string') {
                options.toastClass.split(' ').forEach((className) => toastElement.classList.add(className));
            } else if (Array.isArray(options.toastClass)) {
                options.toastClass.forEach((value) => toastElement.classList.add(value));
            }
            toastElement.classList.add(map.iconClass);
        }

        // Add title
        if (map.title) {
            titleElement.className = options.titleClass!;
            titleElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.title) : map.title;
            toastElement.appendChild(titleElement);
        }

        // Add message
        if (map.message) {
            messageElement.className = options.messageClass!;
            messageElement.innerHTML = options.escapeHtml ? this.escapeHtml(map.message) : map.message;
            toastElement.appendChild(messageElement);
        }

        // Add close button
        if (options.closeButton) {
            closeElement.className = options.closeClass!;
            closeElement.setAttribute('role', 'button');
            closeElement.innerHTML = options.closeHtml!.innerHTML;
            toastElement.appendChild(closeElement);
        }

        // Add progress bar
        if (options.progressBar) {
            progressElement.className = options.progressClass!;
            toastElement.appendChild(progressElement);
        }

        // RTL support
        if (options.rtl) {
            toastElement.classList.add('rtl');
        }

        // Set ARIA attributes
        let ariaValue = 'polite';
        if (map.iconClass === 'toast-error' || map.iconClass === 'toast-warning') {
            ariaValue = 'assertive';
        }
        toastElement.setAttribute('aria-live', ariaValue);

        return {
            toastElement,
            titleElement,
            messageElement,
            progressElement,
            closeElement,
        };
    }
}
