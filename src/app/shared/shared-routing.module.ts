import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsGuard } from '../core/guards/sessions.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SessionsGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
