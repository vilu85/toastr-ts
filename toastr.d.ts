import { ToastrAPI } from './src';

declare global {
    interface Window { toastr: ToastrAPI; }
}

export {};
