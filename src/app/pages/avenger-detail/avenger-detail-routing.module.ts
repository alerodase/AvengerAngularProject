import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AvengerDetailComponent } from './avenger-detail.component';


const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:AvengerDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvengerDetailRoutingModule {

}
