import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {
  }

  canActivate() {
    if (this.auth.userIsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
