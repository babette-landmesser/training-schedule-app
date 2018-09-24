import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetListComponent } from './workout-set-list.component';

describe('WorkoutSetListComponent', () => {
  let component: WorkoutSetListComponent;
  let fixture: ComponentFixture<WorkoutSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
