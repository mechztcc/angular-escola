import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './pages/schools/schools.component';
import { CardSelectSchoolComponent } from './components/card-select-school/card-select-school.component';


@NgModule({
  declarations: [
    SchoolsComponent,
    CardSelectSchoolComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ]
})
export class SchoolsModule { }
