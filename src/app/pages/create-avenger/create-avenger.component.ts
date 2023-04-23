import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvengerService } from 'src/app/core/services/avengers/avenger.service';
import { ApiAvengersListI } from 'src/app/core/services/avengers/models/avengers-interface';

@Component({
  selector: 'app-create-avenger',
  templateUrl: './create-avenger.component.html',
  styleUrls: ['./create-avenger.component.scss']
})
export class CreateAvengerComponent {

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
