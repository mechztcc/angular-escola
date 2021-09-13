import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
