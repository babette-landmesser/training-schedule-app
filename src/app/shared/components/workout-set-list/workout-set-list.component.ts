import { Component, Input, OnInit } from '@angular/core';
import { NewWorkoutSetEvent } from '../../../core/events/new-workout-set.event';
import { Set } from '../../../core/models/set';
import { SetService } from '../../../core/services/set.service';

@Component({
  selector: 'app-workout-set-list',
  templateUrl: './workout-set-list.component.html',
  styleUrls: ['./workout-set-list.component.css']
})
export class WorkoutSetListComponent implements OnInit {
  sets: Set[] = [];

  @Input() workoutId: number;

  constructor(private newWorkoutSetEvent: NewWorkoutSetEvent,
              private setsService: SetService) { }

  ngOnInit() {
    this.newWorkoutSetEvent.newWorkoutSetCreated.subscribe(
      newSet => this.sets.push(newSet)
    );

    if (this.workoutId) {
      this.setsService.getAllSetsOfWorkoutId(this.workoutId).subscribe(
        result => this.sets = result
      );
    }
  }

}
