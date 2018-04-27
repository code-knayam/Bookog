import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { SpinnerService } from './spinner.service';
import { UserDataStorageService } from './user-data-storage.service';
import { User } from './user.model';

@Injectable()
export class AuthService {

    private token: string;

    constructor(private router: Router,
            private spinnerService: SpinnerService,
        private userDataStorageService: UserDataStorageService) { }

    signUpUser(newUser: User, password) {
        this.spinnerService.showSpinner();
        firebase.auth().createUserWithEmailAndPassword(newUser.userEmail, password)
            .then(
                (response) => {
                    console.log(response);
                    this.setToken();
                    newUser.userId = response.uid;
                    this.userDataStorageService.saveUserData(newUser);
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
        this.router.navigate(['/signIn']);
        this.spinnerService.hideSpinner();
    }

}
