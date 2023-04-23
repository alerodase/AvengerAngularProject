import { MyCreationsModule } from './pages/my-creations/my-creations.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvengersListComponent } from './pages/avengers-list/avengers-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'avengers-list',
    loadChildren: () =>
      import('./pages/avengers-list/avengers-list.module').then(
        (m) => m.AvengersListModule
      ),
  },
  {
    path: 'avenger-detail/:id',
    loadChildren: () =>
      import('./pages/avenger-detail/avenger-detail.module').then(
        (m) => m.AvengerDetailModule
      ),
  },
  {
    path: 'create-avenger',
    loadChildren: () =>
      import('./pages/create-avenger/create-avenger.module').then(
        (m) => m.CreateAvengerModule
      ),
  },
  {
    path: 'my-creations',
    loadChildren: () =>
      import('./pages/my-creations/my-creations.module').then(
        (m) => m.MyCreationsModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
