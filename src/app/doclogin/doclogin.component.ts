import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css'],
})
export class DocloginComponent implements OnInit {
  username: string = '';
  password: string = '';

  inValidLogin = false;

  constructor(private router: Router, private docauth: DocauthService) {}

  ngOnInit(): void {}

  checkLogin() {
    if (this.docauth.authenticate(this.username, this.password)) {
      this.router.navigate(['doctor']);
      this.inValidLogin = false;
    } 
    else {
      this.inValidLogin = true;
      alert('Invalid username or password !');
      this.router.navigate(['home']);
    }
  }
}
