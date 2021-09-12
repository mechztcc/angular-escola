import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardSelectClassroomComponent } from './components/card-select-classroom/card-select-classroom.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    CardSelectClassroomComponent
  ],
  imports: [
    CommonModule,
    ClassroomsRoutingModule,
    SharedModule
  ]
})
export class ClassroomsModule { }
