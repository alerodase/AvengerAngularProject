import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAvengerComponent } from './create-avenger.component';

const routes: Routes = [
  {path:'',
pathMatch:'full',
component:CreateAvengerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAvengerRoutingModule { }
