import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectClassroomComponent } from './card-select-classroom.component';

describe('CardSelectClassroomComponent', () => {
  let component: CardSelectClassroomComponent;
  let fixture: ComponentFixture<CardSelectClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
