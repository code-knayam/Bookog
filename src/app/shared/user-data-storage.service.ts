import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';


@Injectable()
export class UserDataStorageService {

    constructor(private httpClient: HttpClient) {}

    saveUserData(user: User) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/user-data.json', user)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

}
