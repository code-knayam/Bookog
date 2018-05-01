import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';


@Injectable()
export class UserDataStorageService {

    private currentUserId: string;
    private currentUserName: string;

    constructor(private httpClient: HttpClient) { }

    setCurrentUser(userId: string) {
        this.currentUserId = userId;
    }

    getCurrentUser() {
        return this.currentUserId;
    }

    setCurrentUserName() {
        console.log('setting current user name');
        return this.httpClient.get('https://bookog-24420.firebaseio.com/user-data.json')
            .map(
                (response: any) => {
                    if (response != null) {
                        for (const key of Object.keys(response)) {
                            const userObject = response[key];
                            if (userObject.userId === this.currentUserId) {
                                this.currentUserName = userObject.userName;
                            }
                        }
                        console.log(this.currentUserName);
                    }
                }
            );
    }

    getCurrentUserName() {
        return this.currentUserName;
    }

    saveUserData(newUser: User) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/user-data.json', newUser);
    }

}
