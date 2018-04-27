import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  private spinnerFlag = false;
  spinnerToggleSubscription: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerFlag = this.spinnerService.getSpinnerStatus();
    this.spinnerToggleSubscription = this.spinnerService.spinnerToggled.subscribe(
      (spinnerFlag) => {
        this.spinnerFlag = spinnerFlag;
      }
    );
  }

}
