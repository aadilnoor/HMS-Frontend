import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  adminUserName: string = 'admin';
  adminPassword: string = 'admin123';
  constructor() {}

  authenticate(username: string, password: string) {
    if (username == this.adminUserName && password == this.adminPassword) {
      sessionStorage.setItem('username2', username);
      return true;
    } else {
      return false;
    }
  }

  idUserLoggedIn(){
    console.log("User Login Successfully...");
    let user = sessionStorage.getItem('username2');
    
    return !(user == null)
  }

  isUserLoggedOut(){
    console.log('User Logout Successfully...')
    sessionStorage.removeItem('username2');
  }
}
