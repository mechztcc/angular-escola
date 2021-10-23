import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeachersRoutingModule } from './teachers-routing.module'
import { HomeComponent } from './pages/home/home.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTeacherComponent } from './components/card-teacher/card-teacher.component'

@NgModule({
  declarations: [HomeComponent, CardTeacherComponent],
  imports: [CommonModule, TeachersRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class TeachersModule {}
