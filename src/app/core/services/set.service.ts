import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpResponse } from '../models/http-response';
import { Set } from '../models/set';

@Injectable()
export class SetService {
  private env = environment;

  constructor(private httpClient: HttpClient) { }

  storeSet(set: Set): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(this.env.apiPath + 'sets', set);
  }

  getAllSetsOfWorkoutId(workoutId: number): Observable<Set[]> {
    return this.httpClient.get<HttpResponse>(this.env.apiPath + 'sets/workout/' + workoutId)
      .map(result => result.response as Set[]);
  }
}
