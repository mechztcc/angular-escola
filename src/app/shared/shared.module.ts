import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
    
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    HomeComponent
  ]
})
export class SharedModule { }
