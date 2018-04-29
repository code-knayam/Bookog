import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {

    private errorFlag: boolean;
    private error: any;
    errorToggled = new Subject<boolean>();

    getErrorStatus() {
        return this.errorFlag;
    }

    getError() {
        return this.error;
    }

    setError(error: any) {
        this.error = error;
    }

    showError() {
        this.errorFlag = true;
        this.errorToggled.next(this.errorFlag);
    }

    hideError() {
        this.errorFlag = false;
        this.errorToggled.next(this.errorFlag);
    }

}
