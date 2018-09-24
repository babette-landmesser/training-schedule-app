import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtHttpClientInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
    > {
    const jwtToken = localStorage.getItem('training-app-token');

    let jwtRequest = req;

    if (jwtToken) {
      const headerValue = 'jwt ' + jwtToken;
      const headers = req.headers.set('Authorization', headerValue);
      jwtRequest = req.clone({ headers: headers });
    }

    return next
      .handle(jwtRequest)
      .do(event => {}, error => console.log('error: ' + JSON.stringify(error)));
  }
}
