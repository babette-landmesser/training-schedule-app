import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewWorkoutComponent } from './new-workout/new-workout.component';
import {WorkoutsListComponent} from './workouts-list/workouts-list.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsListComponent
  },
  {
    path: 'new-workout/:id',
    component: NewWorkoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
