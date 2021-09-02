import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectSchoolComponent } from './card-select-school.component';

describe('CardSelectSchoolComponent', () => {
  let component: CardSelectSchoolComponent;
  let fixture: ComponentFixture<CardSelectSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
