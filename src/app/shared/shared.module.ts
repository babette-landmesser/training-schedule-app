import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutSetListComponent } from './components/workout-set-list/workout-set-list.component';
import { EquipmentIdToNamePipe } from './pipes/equipment-id-to-name.pipe';

const componentsAndPipes = [
  WorkoutSetListComponent,
  EquipmentIdToNamePipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: componentsAndPipes,
  exports: componentsAndPipes
})
export class SharedModule {
}
