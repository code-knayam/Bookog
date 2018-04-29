import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { DataStorageService } from '../dashboard/data-storage.service';


@Injectable()
export class UserDataStorageService {

    private currentUserId: string;

    constructor(private httpClient: HttpClient, private dataStorageSerivce: DataStorageService) {}

    setCurrentUser(userId: string) {
        this.currentUserId = userId;
    }

    saveUserData(newUser: User) {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/user-data.json', newUser)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    createBookData() {
        return this.httpClient.post('https://bookog-24420.firebaseio.com/book-data-' + this.currentUserId + '.json'
        , this.dataStorageSerivce.getAllBooksRead())
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

}
