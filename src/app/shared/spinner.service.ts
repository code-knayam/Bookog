import { Subject } from 'rxjs/Subject';

export class SpinnerService {

    private spinnerFlag: boolean;
    spinnerToggled = new Subject<boolean>();

    getSpinnerStatus() {
        return this.spinnerFlag;
    }

    showSpinner() {
        this.spinnerFlag = true;
        this.spinnerToggled.next(this.spinnerFlag);
    }

    hideSpinner() {
        this.spinnerFlag = false;
        this.spinnerToggled.next(this.spinnerFlag);
    }

}
