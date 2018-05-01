import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { SpinnerService } from './spinner.service';
import { UserDataStorageService } from './user-data-storage.service';
import { User } from './user.model';
import { ErrorService } from './error.service';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class AuthService {

    private token: string;

    constructor(private router: Router,
        private spinnerService: SpinnerService,
        private userDataStorageService: UserDataStorageService,
        private dataStorageService: DataStorageService,
        private errorService: ErrorService) { }

    signUpUser(newUser: User, password) {
        this.spinnerService.showSpinner();
        firebase.auth().createUserWithEmailAndPassword(newUser.userEmail, password)
            .then(
                (response) => {
                    console.log(response);
                    this.setToken();
                    newUser.userId = response.uid;
                    this.setCurrentUserId(newUser.userId);
                    this.userDataStorageService.saveUserData(newUser)
                        .subscribe(
                            (saveDataresponse) => {
                                console.log(saveDataresponse);
                                this.userDataStorageService.setCurrentUserName()
                                    .subscribe(
                                        () => {
                                            this.dataStorageService.fetchBooks().subscribe(
                                                () => {
                                                    this.spinnerService.hideSpinner();
                                                    this.router.navigate(['/dashboard']);
                                                }
                                            );
                                        }
                                    );
                            }
                        );
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    this.errorService.setError(error);
                    this.errorService.showError();
                    this.spinnerService.hideSpinner();
                }
            );
    }

    signInUser(email: string, password: string) {
        this.spinnerService.showSpinner();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    console.log(response);
                    this.setToken();
                    this.setCurrentUserId(response.uid);
                    this.userDataStorageService.setCurrentUserName()
                        .subscribe(
                            () => {
                                this.dataStorageService.fetchBooks().subscribe(
                                    () => {
                                        this.spinnerService.hideSpinner();
                                        this.router.navigate(['/dashboard']);
                                    }
                                );
                            }
                        );
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    this.errorService.setError(error);
                    this.errorService.showError();
                    this.spinnerService.hideSpinner();
                }
            );
    }

    setToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    this.token = token;
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    this.errorService.setError(error);
                    this.errorService.showError();
                    this.spinnerService.hideSpinner();
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
        this.dataStorageService.resetBooks();
        this.router.navigate(['/signIn']);
        this.spinnerService.hideSpinner();
    }

    setCurrentUserId(currentUserId: string) {
        this.userDataStorageService.setCurrentUser(currentUserId);
    }

}
