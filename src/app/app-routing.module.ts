import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsGuard } from './core/guards/sessions.guard';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SessionsGuard] },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: 'schools', loadChildren: () => import('./modules/schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'home', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
  { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) },
  { path: 'classrooms', loadChildren: () => import('./modules/classrooms/classrooms.module').then(m => m.ClassroomsModule) },
  { path: 'teachers', loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
