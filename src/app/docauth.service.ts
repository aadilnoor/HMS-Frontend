import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocauthService {
  private validUsername: string = 'doctor';
  private validPassword: string = 'doctor123';

  authenticate(username: string, password: string) {
    if (username == this.validUsername && password == this.validPassword) {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
  constructor() {}

  isDoctorLoggedIn(){
    console.log("Doctor Login Successfully...");
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  isDoctorLoggedOut(){
    console.log("Doctor Logout Successfully...");
    sessionStorage.removeItem('username');
  }
}
