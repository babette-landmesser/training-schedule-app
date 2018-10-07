import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpResponse } from '../models/http-response';
import { Workout } from '../models/workout';

@Injectable()
export class WorkoutsService {
  env = environment;
  workout: Workout;

  constructor(private httpClient: HttpClient) { }

  getCurrentWorkoutId(): number {
    return this.workout ? this.workout.id : null;
  }

  storeWorkoutIdAsCurrentWorkout(id: number): void {
    this.workout.id = id;
  }

  createNewWorkout(): Observable<HttpResponse> {
    this.workout = {} as Workout;
    return this.httpClient.post<HttpResponse>(this.env.apiPath + 'workouts', {});
  }

  getWorkout(id: number): Observable<Workout> {
    return this.httpClient.get<HttpResponse>(this.env.apiPath + 'workouts/' + id).map(
      (response: HttpResponse) => response.response[0] as Workout
    );
  }

  getAllWorkoutsForUser(): Observable<Workout[]> {
    return this.httpClient.get<HttpResponse>(this.env.apiPath + 'workouts')
      .map(response => response.response as Workout[]);
  }

  deleteWorkout(workoutId: number) {
    return this.httpClient.delete(this.env.apiPath + 'workouts/' + workoutId);
  }
}
