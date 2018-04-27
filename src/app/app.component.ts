import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSpinner = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showSpinner = true;
      } else if (event instanceof NavigationEnd) {
        this.showSpinner = false;
      }
    });
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbRyexjH5WUjrHzcNZCDoaZTbUDWNy5lQ',
      authDomain: 'bookog-24420.firebaseapp.com',
      databaseURL: 'https://bookog-24420.firebaseio.com',
      projectId: 'bookog-24420',
      storageBucket: 'bookog-24420.appspot.com',
      messagingSenderId: '727575941851'
    });
  }
}
