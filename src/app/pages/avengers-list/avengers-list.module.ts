import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvengersListRoutingModule } from './avengers-list-routing.module';
import { AvengersListComponent } from './avengers-list.component';


@NgModule({
  declarations: [AvengersListComponent],
  imports: [
    CommonModule,
    AvengersListRoutingModule
  ],
})
export class AvengersListModule { }
