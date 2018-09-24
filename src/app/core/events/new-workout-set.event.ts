import { EventEmitter, Injectable } from '@angular/core';
import { Set } from '../models/set';

@Injectable()
export class NewWorkoutSetEvent {
  newWorkoutSetCreated: EventEmitter<Set> = new EventEmitter<Set>();

  createdNewWorkoutSet(set: Set) {
    this.newWorkoutSetCreated.emit(set);
  }
}
