import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvengerDetailRoutingModule } from './avenger-detail-routing.module';
import { AvengerDetailComponent } from './avenger-detail.component';


@NgModule({
  declarations: [
    AvengerDetailComponent
  ],
  imports: [
    CommonModule,
    AvengerDetailRoutingModule
  ]
})
export class AvengerDetailModule { }
