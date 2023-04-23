import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAvengerRoutingModule } from './create-avenger-routing.module';
import { CreateAvengerComponent } from './create-avenger.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateAvengerComponent
  ],
  imports: [
    CommonModule,
    CreateAvengerRoutingModule,
    SharedModule
  ]
})
export class CreateAvengerModule { }
