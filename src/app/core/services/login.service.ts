import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';
import {Token} from '../models/token';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  env = environment;

  constructor(private httpClient: HttpClient) { }

  doLogin(login: Login): Observable<Token> {
    return this.httpClient.post<Token>(this.env.apiPath + 'login', login);
  }

}
