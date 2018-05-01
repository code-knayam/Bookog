import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';


@Injectable()
export class UserDataStorageService {

    private currentUserId: string;

    constructor(private httpClient: HttpClient) {}

    setCurrentUser(userId: string) {
        this.currentUserId = userId;
    }

    getCurrentUser() {
        return this.currentUserId;
    }

    saveUserData(newUser: User) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/user-data.json', newUser)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

}
