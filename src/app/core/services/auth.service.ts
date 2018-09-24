import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

export class Auth {
  token = 'training-app-token';

  userIsLoggedIn() {
    return tokenNotExpired(this.token);
  }

  doLogout() {
    localStorage.removeItem(this.token);
  }

  getTokenPayload(): any {
    const token = localStorage.getItem(this.token);

    const helper = new JwtHelper();

    try {
      return helper.decodeToken(token);
    } catch (error) {
      this.doLogout();
    }
  }
}
