import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsListComponent } from './workouts-list/workouts-list.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

@NgModule({
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    WorkoutsListComponent,
    NewWorkoutComponent
  ],
  providers: [
  ]
})
export class WorkoutsModule { }
