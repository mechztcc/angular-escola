import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolHomeComponent } from './pages/school-home/school-home.component';
import { SchoolsComponent } from './pages/schools/schools.component';

const routes: Routes = [
  { path: '', component: SchoolsComponent },
  { path: ':id', component: SchoolHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
