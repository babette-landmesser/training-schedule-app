import { Component, OnInit } from '@angular/core';
import { NewWorkoutSetEvent } from '../../../core/events/new-workout-set.event';
import { Set } from '../../../core/models/set';

@Component({
  selector: 'app-workout-set-list',
  templateUrl: './workout-set-list.component.html',
  styleUrls: ['./workout-set-list.component.css']
})
export class WorkoutSetListComponent implements OnInit {
  sets: Set[] = [];

  constructor(private newWorkoutSetEvent: NewWorkoutSetEvent) { }

  ngOnInit() {
    this.newWorkoutSetEvent.newWorkoutSetCreated.subscribe(
      newSet => this.sets.push(newSet)
    );
  }

}
