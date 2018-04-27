import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Injectable()
export class AuthService {

    private token: string;

    constructor(private router: Router, private spinnerService: SpinnerService) { }

    signUpUser(email: string, password: string) {
        this.spinnerService.showSpinner();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    console.log(response);
                    this.setToken();
                    this.spinnerService.hideSpinner();
                    this.router.navigate(['/dashboard']);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    signInUser(email: string, password: string) {
        this.spinnerService.showSpinner();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    console.log(response);
                    this.setToken();
                    this.spinnerService.hideSpinner();
                    this.router.navigate(['/dashboard']);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    setToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
                this.token = token;
            }
        );
    }

    isUserAuthenticated() {
        return this.token != null;
    }

    logOutUser() {
        this.spinnerService.showSpinner();
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
        this.spinnerService.hideSpinner();
    }

}
