import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutsService } from '../../core/services/workouts.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './workouts-list.component.html',
  styleUrls: ['./workouts-list.component.css']
})
export class WorkoutsListComponent implements OnInit {

  constructor(private workoutsService: WorkoutsService,
              private router: Router) { }

  ngOnInit() {
  }

  createNewWorkout() {
    this.workoutsService.createNewWorkout().subscribe(
      result => {
        this.workoutsService.storeWorkoutIdAsCurrentWorkout(result.response.insertId);
        this.router.navigate(['/workouts/new-workout/' + result.response.insertId]);
      }
    );
  }

}
