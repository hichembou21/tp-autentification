import {User} from './user';

export class ModelUser  {
    constructor() {

    }

    getUserByLogin(email, password) {
        let userList = JSON.parse(localStorage.getItem('users'));
        let result;
        userList.forEach( function(user) {
            if (email === user.email && password === user.password) {
               result = user; 
            }
        });
        return result;
    }

    addUser(user) {
        let userList = JSON.parse(localStorage.getItem('users'));
        if(!userList) {
            userList = [];
        }
        userList.push(user);
        localStorage.setItem('users', JSON.stringify(userList));
    }
}