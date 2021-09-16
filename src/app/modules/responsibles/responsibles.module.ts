import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiblesRoutingModule } from './responsibles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResponsiblesRoutingModule,
    SharedModule
  ]
})
export class ResponsiblesModule { }
