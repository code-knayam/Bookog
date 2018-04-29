import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent implements OnInit {

  error: any;
  private errorFlag = false;
  private toggleErrorClass = false;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.errorFlag = this.errorService.getErrorStatus();
    this.errorService.errorToggled.subscribe(
      (errorFlag) => {
        this.errorFlag = errorFlag;
        this.error = this.errorService.getError();
      }
    );
  }

  onDismissError() {
    this.toggleErrorClass = true;
    setTimeout(
      () => {
        this.errorFlag = false;
        this.toggleErrorClass = false;
      }, 500
    );
  }

}
