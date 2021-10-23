import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StudentsRoutingModule } from './students-routing.module'
import { HomeComponent } from './pages/home/home.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardStudentComponent } from './components/card-student/card-student.component'

@NgModule({
  declarations: [HomeComponent, CardStudentComponent],
  imports: [CommonModule, StudentsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class StudentsModule {}
