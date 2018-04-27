export class User {

    userId: string;
    userName: string;
    userEmail: string;

    constructor(userId: string,
        userName: string,
        userEmail: string) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
    }
}
