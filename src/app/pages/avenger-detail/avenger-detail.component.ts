import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiAvengersListI } from 'src/app/core/services/avengers/models/avengers-interface';
import { AvengerService } from 'src/app/core/services/avengers/avenger.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.scss']
})
export class AvengerDetailComponent {

  public avenger?:ApiAvengersListI
  constructor(
    private activatedRoute: ActivatedRoute,
    private avengersService:AvengerService
  ){
    this.activatedRoute.params.subscribe((params)=>{
      const avengerId=params['id'];
      this.avengersService.getAvengerById(avengerId).subscribe((avenger)=>{this.avenger=avenger})
    })
  }

}
