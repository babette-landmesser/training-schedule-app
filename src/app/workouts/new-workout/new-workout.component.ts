import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewWorkoutSetEvent } from '../../core/events/new-workout-set.event';
import { Equipment } from '../../core/models/equipment';
import { Set } from '../../core/models/set';
import { Workout } from '../../core/models/workout';
import { EquipmentService } from '../../core/services/equipment.service';
import { SetService } from '../../core/services/set.service';
import { WorkoutsService } from '../../core/services/workouts.service';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  equipments: Equipment[];
  model: Set;
  workout: Workout;
  selectedEquipment: Equipment;

  @ViewChild('addSetForm') addSetForm: NgForm;

  constructor(private equipmentService: EquipmentService,
              private workoutService: WorkoutsService,
              private setService: SetService,
              private newWorkoutSetEvent: NewWorkoutSetEvent,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      result => this.workoutService.getWorkout(result.id).subscribe(
        wo => this.workout = wo
      )
    );

    this.equipmentService.getAllEquipmentForCurrentUser().subscribe(
      result => this.equipments = result
    );
  }

  addNewSet() {
    this.model = {
      workout_id: this.workout.id,
      equipment_id: null
    } as Set;
  }

  setSelectedEquipment(event) {
    this.selectedEquipment = this.equipments.find(e => e.id === parseInt(event.target.value, 10));
  }

  submitNewSetInWorkout() {
    if (this.addSetForm.valid) {
      this.setService.storeSet(this.model).subscribe(
        success => {
          this.model.id = success.response.insertId;
          this.newWorkoutSetEvent.createdNewWorkoutSet(this.model);
          delete this.model;
        },
        error => console.error(error)
      )
    }
  }

  markWorkoutAsDone() {
    delete this.model;
    this.router.navigate(['/workouts']);
  }

  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout.id).subscribe(
      result => this.router.navigate(['/workouts'])
    );
  }
}
