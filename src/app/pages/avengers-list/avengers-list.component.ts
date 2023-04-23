import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvengerService } from 'src/app/core/services/avengers/avenger.service';
import { AvengersListI } from 'src/app/core/services/avengers/models/avengers-interface';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.scss'],
})
export class AvengersListComponent implements OnInit {

  public avengers?:AvengersListI[];
  public originalAvengers?:AvengersListI[];
  public inputValue:string=''

  constructor(
    private router: Router,
private avengersService:AvengerService
    ) {}

public ngOnInit(): void {
return this.getAvengers()
}

public removeAvenger(id:string){
  this.avengersService.deleteAvenger(id).subscribe(()=>
    this.avengersService.getAvengers()
  )
}

public getAvengers(){
  this.avengersService.getAvengers().subscribe((avengers:AvengersListI[])=>{
    this.avengers=avengers;
    this.originalAvengers=avengers
  })
}

  // public navigateToCreate() {
  //   this.router.navigate(['create-avenger']);
  // }

  public navigateToDetail(id: string) {
    this.router.navigate(['avenger-detail', id]);
  }
}
