import { Component, OnInit } from '@angular/core';
import {Login} from '../../core/models/login';
import {LoginService} from '../../core/services/login.service';
import {Router} from '@angular/router';
import {Auth} from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login;
  loginFormHasErrors: boolean;

  constructor(private loginService: LoginService, private router: Router, private auth: Auth) {
    this.model = new Login();
    if (this.auth.userIsLoggedIn()) {
      this.router.navigate(['/workouts']);
    }
  }

  ngOnInit() {
  }

  sendLogin() {
    this.loginService.doLogin(this.model).subscribe(
      result => {
        if (result.hasOwnProperty('token')) {
          localStorage.setItem('training-app-token', result.token);
          this.router.navigate(['/workouts']);
        } else {
          if (result.status === 500) {
            this.loginFormHasErrors = true;
          }
        }
      }
    );
  }
}
