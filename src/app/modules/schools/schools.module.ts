import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './pages/schools/schools.component';
import { CardSelectSchoolComponent } from './components/card-select-school/card-select-school.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolHomeComponent } from './pages/school-home/school-home.component';
import { CardClassroomComponent } from './components/card-classroom/card-classroom.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SchoolsComponent,
    CardSelectSchoolComponent,
    SchoolHomeComponent,
    CardClassroomComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SchoolsModule { }
