import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvengersListComponent } from './avengers-list.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:AvengersListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvengersListRoutingModule { }
