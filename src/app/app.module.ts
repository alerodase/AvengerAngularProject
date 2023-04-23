import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';
import { AvengersListModule } from './pages/avengers-list/avengers-list.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AvengerComponent } from './pages/avenger/avenger.component';
import { ApiAvengerService } from './core/services/avengers/API/api-avenger.service';
import{HttpClientModule} from '@angular/common/http';
import { MyCreationsComponent } from './pages/my-creations/my-creations.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengerComponent,
    MyCreationsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
