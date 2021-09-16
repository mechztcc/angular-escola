import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableListComponent } from './components/table-list/table-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
