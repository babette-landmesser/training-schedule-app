import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from '../../core/models/workout';
import { WorkoutsService } from '../../core/services/workouts.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './workouts-list.component.html',
  styleUrls: ['./workouts-list.component.css']
})
export class WorkoutsListComponent implements OnInit {

  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService,
              private router: Router) { }

  ngOnInit() {
    this.workoutsService.getAllWorkoutsForUser().subscribe(
      result => this.workouts = result
    );
  }

  goToWorkout(workoutId: number) {
    this.router.navigate(['/workouts/new-workout/' + workoutId]);
  }
}
