import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    CreateAccountComponent,
    FormCreateAccountComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
