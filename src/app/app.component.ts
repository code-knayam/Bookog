import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  // online$: Observable<boolean>;

  constructor() {
    // this.online$ = Observable.merge(
    // Observable.of(navigator.onLine),
    // Observable.fromEvent(window, 'online').mapTo(true),
    // Observable.fromEvent(window, 'offline').mapTo(false)
    // );
    // <p>{{online$ | async}}</p> usage for above
  }
}
