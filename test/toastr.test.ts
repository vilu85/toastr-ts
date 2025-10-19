import Toastr from '../src';
import { ToastResponse } from '../src/types';

// this is necessary to test the optional parameters
type Notifiers = 'info' | 'warning' | 'success' | 'error';

import defaults from './defaults.json';

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

describe('Toastr', () => {
	let toastr: Toastr;

	beforeEach(() => {
		toastr = new Toastr();

		document.body.innerHTML = '';
	});

	it('should not fail', () => {
		expect(toastr).toBeInstanceOf(Toastr);
	});

	it('should create a container when creating an instance', () => {
		new Toastr();

		expect(document.getElementById('toast-container')).toBeDefined();
	});

	it('should allow two toastClasses', () => {
		const toastrString = new Toastr({ toastClass: 'one' });
		const toastrArray = new Toastr({ toastClass: ['one', 'two'] });
		const toastrArrayString = new Toastr({ toastClass: 'one two' });

		const successString = toastrString.success('');
		const successArray = toastrArray.success('');
		const successArrayString = toastrArrayString.success('');

		if (!successString || !successArray || !successArrayString) {
			return;
		}

		expect(successString.className).toBe('one toast-success');
		expect(successArray.className).toBe('one two toast-success');
		expect(successArrayString.className).toBe('one two toast-success');
	});

	describe('clear', () => {
		beforeEach(() => {
			document.body.innerHTML = '<div id="my-div"></div>';
			toastr.options.containerId = 'my-div';
			toastr.options.hideDuration = 1;
			toastr.options.showDuration = 1;
		});

		it('should clear toast and container', async () => {
			const myToast = toastr.success('') as HTMLElement;
			toastr.clear(myToast);
			await new Promise((res) => setTimeout(res, 2));
			expect(toastr.container.innerHTML).toBe('');
		});

		it('should clear toast and container but leave one toast', async () => {
			const myToast = toastr.success('First Message') as HTMLElement;
			const secondToast = toastr.success('Second Message') as HTMLElement;
			const thirdToast = toastr.success('Third Message') as HTMLElement;

			toastr.clear(myToast);
			await new Promise((res) => setTimeout(res, 2));

			expect(toastr.container.innerHTML).not.toContain((myToast as HTMLDivElement).innerHTML);
			expect(toastr.container.innerHTML).toContain((secondToast as HTMLDivElement).innerHTML);
			expect(toastr.container.innerHTML).toContain((thirdToast as HTMLDivElement).innerHTML);

			toastr.clear(secondToast);
			await new Promise((res) => setTimeout(res, 2));

			expect(toastr.container.innerHTML).not.toContain((myToast as HTMLDivElement).innerHTML);
			expect(toastr.container.innerHTML).not.toContain((secondToast as HTMLDivElement).innerHTML);
			expect(toastr.container.innerHTML).toContain((thirdToast as HTMLDivElement).innerHTML);

			toastr.clear(thirdToast);
			await new Promise((res) => setTimeout(res, 2));

			expect(toastr.container.innerHTML).toBe('');
		});

		it('should clear all toasts when empty', async () => {
			toastr.success('');
			toastr.clear();
			toastr.success('');
			toastr.clear();
			toastr.success('');
			toastr.clear();
			await new Promise((res) => setTimeout(res, 2));
			expect(toastr.container.innerHTML).toBe('');
		});

		it('should clear container', async () => {
			toastr.success('');
			toastr.clear();
			await new Promise((res) => setTimeout(res, 2));
			expect(toastr.container.innerHTML).toBe('');
		});

		it('should create container after clear', () => {
			expect(toastr.container).toBe(undefined);
			expect(toastr.clear.bind(toastr)).not.toThrow();
			expect(toastr.container).not.toBe(undefined);
		});
	});

	describe('remove', () => {
		beforeEach(() => {
			toastr.container = undefined as never;
			document.body.innerHTML = '<div id="my-div"></div>';
			toastr.options.containerId = 'my-div';
		});

		it('should not remove with undefied container and create container if undefined', () => {
			expect(toastr.container).toBe(undefined);

			toastr.remove();

			expect(toastr.container).not.toBe(undefined);
		});

		it('should not remove with undefied container and leave container undefined', () => {
			toastr.options.containerId = 'not-existing-div';

			expect(toastr.container).toBe(undefined);

			toastr.remove();

			expect(toastr.container).toBe(undefined);
		});

		it('should remove a toast', () => {
			const myToast = toastr.success('My message');
			const secondToast = toastr.success('My second message');

			toastr.remove(myToast);

			expect(toastr.container.innerHTML).not.toContain((myToast as HTMLElement).innerHTML);
			expect(toastr.container.innerHTML).toContain((secondToast as HTMLElement).innerHTML);
		});

		// @FIXME: currently there is no way to focus the toast
		it('should not remove an active toast', () => {
			const myToast = toastr.success('My message');
			const secondToast = toastr.success('My second message');

			(myToast as HTMLElement).focus();
			toastr.remove(myToast);

			expect(toastr.container.innerHTML).toContain((myToast as HTMLElement).innerHTML);
			expect(toastr.container.innerHTML).toContain((secondToast as HTMLElement).innerHTML);
		});
	});

	(['info', 'warning', 'error', 'success'] as Notifiers[]).forEach((item) => {
		describe(`${item}`, () => {
			it('pass title and message', () => {
				const toast = toastr[item](sampleMsg, sampleTitle);

				expect(toast?.querySelector('div.toast-title')?.innerHTML).toBe(sampleTitle);
				expect(toast?.querySelector('div.toast-message')?.innerHTML).toBe(sampleMsg);
				expect(toast?.classList).toContain(defaults.iconClasses[item]);
			});

			it('pass message, but no title', () => {
				const toast = toastr[item](sampleMsg);

				expect(toast?.querySelector('div.toast-title')).toBeNull();
				expect(toast?.querySelector('div.toast-message')?.innerHTML).toBe(sampleMsg);
				expect(toast?.classList).toContain(defaults.iconClasses[item]);
			});

			it('pass no message nor title', () => {
				const toast = toastr[item]('');

				expect(toast?.querySelector('div.toast-title')).toBeNull();
				expect(toast?.querySelector('div.toast-message')?.innerHTML).toBeFalsy();
				expect(toast?.classList).toContain(defaults.iconClasses[item]);
			});
		});
	});

	describe('escape html', () => {
		beforeEach(() => {
			document.body.innerHTML = '';
		});

		(['info', 'warning', 'error', 'success'] as Notifiers[]).forEach((item) => {
			it(`escape html - ${item}`, () => {
				toastr.options.escapeHtml = true;

				const toast = toastr[item]('html <strong>message</strong>', 'html <u>title</u>');

				expect(toast?.querySelector('div.toast-title')?.innerHTML).toBe('html &lt;u&gt;title&lt;/u&gt;');
				expect(toast?.querySelector('div.toast-message')?.innerHTML).toBe('html &lt;strong&gt;message&lt;/strong&gt;');
			});
		});
	});

	describe('closeButton', () => {
		it('close button disabled', () => {
			toastr.options.closeButton = false;

			const toast = toastr.success('');

			expect(toast?.querySelector('button.toast-close-button')).toBeNull();
		});

		it('close button enabled', () => {
			toastr.options.closeButton = true;

			const toast = toastr.success('');

			expect(toast?.querySelector('button.toast-close-button')).toBeDefined();
		});

		it('close button has type=button', () => {
			toastr.options.closeButton = true;

			const toast = toastr.success('');

			expect(toast?.querySelector<HTMLButtonElement>('button[type="button"].toast-close-button')).toBeDefined();
		});

		it('close button duration', async () => {
			toastr.options.closeButton = true;
			toastr.options.closeDuration = 0;
			toastr.options.hideDuration = 1;

			const toast = toastr.success('') as HTMLElement;

			toast.querySelector<HTMLButtonElement>('button.toast-close-button')?.click();

			expect(toastr.container.children).toHaveLength(1);

			await new Promise((res) => setTimeout(res, 2));

			expect(toastr.container.children).toHaveLength(0);
		});
	});

	describe('progressbar', () => {
		it('progress bar disabled', () => {
			toastr.options.progressBar = false;

			const toast = toastr.success('');

			expect(toast?.querySelector<HTMLDivElement>('div.toast-progress')).toBeNull();
		});

		it('progress bar enabled', () => {
			toastr.options.progressBar = true;

			const toast = toastr.success('');

			expect(toast?.querySelector<HTMLDivElement>('div.toast-progress')).toBeDefined();
		});
	});

	describe('rtl', () => {
		beforeEach(() => {
			toastr.options.rtl = true;
		});

		it('toastr is ltr by default', () => new Promise<void>(done => {
			const thisToastr = new Toastr();

			expect.assertions(1);

			thisToastr.subscribe((response) => {
				expect(response.options.rtl).toBe(false);

				done();
			});

			thisToastr.success('');
		}));

		it('ltr toastr does not have .rtl class', () => {
			const thisToastr = new Toastr();
			const toastrSuccess = thisToastr.success('');

			expect(toastrSuccess?.classList.contains('rtl')).toBe(false);
		});

		it('rtl toastr has .rtl class', () => {
			const toastrSuccess = toastr.success('');

			expect(toastrSuccess?.classList.contains('rtl')).toBe(true);
		});
	});

	describe('accessibility', () => {
		it('toastr success has aria polite', () => {
			const toastrSuccess = toastr.success('') as HTMLElement;

			expect(toastrSuccess.getAttribute('aria-live')).toBe('polite');
		});

		it('toastr info has aria polite', () => {
			const toastrSuccess = toastr.info('') as HTMLElement;

			expect(toastrSuccess.getAttribute('aria-live')).toBe('polite');
		});

		it('toastr error has aria assertive', () => {
			const toastrSuccess = toastr.error('') as HTMLElement;

			expect(toastrSuccess.getAttribute('aria-live')).toBe('assertive');
		});

		it('toastr warning has aria assertive', () => {
			const toastrSuccess = toastr.warning('') as HTMLElement;

			expect(toastrSuccess.getAttribute('aria-live')).toBe('assertive');
		});
	});

	describe('debug', () => {
		beforeEach(() => {
			console.log = jest.fn();
		});

		it('should not call debug', () => {
			toastr.options.debug = false;

			toastr.success('');

			expect(console.log).not.toHaveBeenCalled();

			toastr.success('');
			toastr.success('');
			toastr.success('');

			expect(console.log).not.toHaveBeenCalled();
		});

		it('should call debug', () => {
			toastr.options.debug = true;

			toastr.success('');

			expect(console.log).toHaveBeenCalled();

			toastr.success('');
			toastr.success('');
			toastr.success('');

			expect(console.log).toHaveBeenCalledTimes(4);
		});

		it('should mix debug', () => {
			toastr.options.debug = true;

			toastr.success('');

			expect(console.log).toHaveBeenCalled();

			toastr.options.debug = false;

			toastr.success('');
			toastr.success('');

			toastr.options.debug = true;

			toastr.success('');

			expect(console.log).toHaveBeenCalledTimes(2);
		});
	});

	describe('event', () => {
		beforeEach(() => {
			toastr.options.closeButton = false;
			toastr.options.hideDuration = 1;
			toastr.options.timeOut = 1;
			toastr.options.closeDuration = 1;
		});

		it('onShown is Executed', async () => {
			toastr.options.onShown = jest.fn();
			toastr.success('');
			await new Promise((res) => setTimeout(res, 10));

			expect(toastr.options.onShown).toHaveBeenCalledTimes(1);
		});

		it('onHidden is Executed', async () => {
			toastr.options.onHidden = jest.fn();
			toastr.success('');

			// setTimeout is not precise enough, but 0.002s should work.
			await new Promise((res) => setTimeout(res, 20));

			expect(toastr.options.onHidden).toHaveBeenCalledTimes(1);
		});

		it('onShown and onHidden are both executed', async () => {
			toastr.options.onShown = jest.fn();
			toastr.options.onHidden = jest.fn();
			toastr.success('');

			// setTimeout is not precise enough, but 0.002s should work.
			await new Promise((res) => setTimeout(res, 20));
			expect(toastr.options.onShown).toHaveBeenCalledTimes(1);
			expect(toastr.options.onHidden).toHaveBeenCalledTimes(1);
		});

		it('onCloseClick is executed', () => {
			toastr.options.closeButton = true;
			toastr.options.closeDuration = 0;
			toastr.options.hideDuration = 2000;
			toastr.options.onCloseClick = jest.fn();

			const $toastrSuccess = toastr.success(defaults.sampleMsg, defaults.sampleTitle) as HTMLElement;

			$toastrSuccess.querySelector<HTMLButtonElement>('button.toast-close-button')!.click();

			expect(toastr.options.onCloseClick).toHaveBeenCalledTimes(1);
		});

		it('message appears when no show or hide method functions provided', () => {
			const $toastrSuccess = toastr.success(defaults.sampleMsg, defaults.sampleTitle);

			expect($toastrSuccess?.classList.contains(defaults.iconClasses.success)).toBe(true);
		});

		it('prevent duplicate sequential toasts', () => {
			toastr.options.preventDuplicates = true;

			toastr.info(sampleMsg, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);
			toastr.info(`${sampleMsg} 1`, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);

			const $container = toastr.getContainer();

			expect($container.children).toHaveLength(3);
		});

		it('prevent dupliacate sequential toasts, but allow previous after clear', () => {
			toastr.options.preventDuplicates = true;

			toastr.info(sampleMsg, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);

			const $container = toastr.getContainer();

			expect($container.children).toHaveLength(1);
		});

		it('allow duplicate sequential toasts', () => {
			toastr.options.preventDuplicates = false;

			toastr.info(sampleMsg, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);
			toastr.info(sampleMsg, sampleTitle);

			const $container = toastr.getContainer();

			expect($container.children).toHaveLength(3);
		});

		it('allow preventDuplicates option to be overridden', () => {
			toastr.info(sampleMsg, sampleTitle, { preventDuplicates: true });
			toastr.info(sampleMsg, sampleTitle, { preventDuplicates: true });
			toastr.info(sampleMsg, sampleTitle);

			const $container = toastr.getContainer();

			expect($container.children).toHaveLength(2);
		});
	});

	describe('subscription', () => {
		it.skip('triggers 2 visible and 2 hidden response notifications while clicking on a toast', async () => {
			const expectedReponses: ToastResponse[] = [];

			toastr.subscribe((response) => {
				if (response.options?.timeOut && response.options.timeOut > 5000) {
					expectedReponses.push(response);
				}
			});

			toastr.info(sampleMsg, sampleTitle, { timeOut: 5001 });

			const $toastrInfo = toastr.info(sampleMsg, sampleTitle, { timeOut: 5002 }) as HTMLElement;

			$toastrInfo.click();

			expect(expectedReponses).toHaveLength(4);
		});
	});

	describe('order or appearance', () => {
		it('newest toast on top', () => {
			toastr.options.newestOnTop = true;

			toastr.success('First toast');
			toastr.success('Second toast');

			const containerHtml = toastr.getContainer()!.innerHTML;

			expect(containerHtml.indexOf('First toast') > containerHtml.indexOf('Second toast')).toBe(true);
		});

		it('oldest toast on top', () => {
			toastr.options.newestOnTop = false;

			toastr.success('First toast');
			toastr.success('Second toast');

			const containerHtml = toastr.getContainer()!.innerHTML;

			expect(containerHtml.indexOf('First toast') < containerHtml.indexOf('Second toast')).toBe(true);
		});
	});

	describe('positioning', () => {
		it('position top-right', () => {
			toastr.options.positionClass = defaults.positionClasses.topRight;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container?.classList.contains(defaults.positionClasses.topRight)).toBe(true);
		});

		it('position bottom-right', () => {
			toastr.options.positionClass = defaults.positionClasses.bottomRight;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container.classList.contains(defaults.positionClasses.bottomRight)).toBe(true);
		});

		it('position bottom-center', () => {
			toastr.options.positionClass = defaults.positionClasses.bottomCenter;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container.classList.contains(defaults.positionClasses.bottomCenter)).toBe(true);
		});

		it('position bottom-left', () => {
			toastr.options.positionClass = defaults.positionClasses.bottomLeft;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container.classList.contains(defaults.positionClasses.bottomLeft)).toBe(true);
		});

		it('position top-left', () => {
			toastr.options.positionClass = defaults.positionClasses.topLeft;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container.classList.contains(defaults.positionClasses.topLeft)).toBe(true);
		});

		it('position top-center', () => {
			toastr.options.positionClass = defaults.positionClasses.topCenter;

			toastr.success(defaults.sampleMsg);

			const $container = toastr.getContainer();

			expect($container.classList.contains(defaults.positionClasses.topCenter)).toBe(true);
		});
	});
});
