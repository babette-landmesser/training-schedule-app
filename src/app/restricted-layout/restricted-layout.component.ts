import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../core/services/auth.service';
import { WorkoutsService } from '../core/services/workouts.service';

@Component({
  selector: 'app-restricted-layout',
  templateUrl: './restricted-layout.component.html',
  styleUrls: ['./restricted-layout.component.css']
})
export class RestrictedLayoutComponent {


  constructor(private workoutsService: WorkoutsService,
              private router: Router,
              private authService: Auth) {}

  createNewWorkout() {
    this.workoutsService.createNewWorkout().subscribe(
      result => {
        this.workoutsService.storeWorkoutIdAsCurrentWorkout(result.response.insertId);
        this.router.navigate(['/workouts/new-workout/' + result.response.insertId]);
      }
    );
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }

}
