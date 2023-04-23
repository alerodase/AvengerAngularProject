import { Router } from '@angular/router';
import { AvengerService } from 'src/app/core/services/avengers/avenger.service';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { avengers } from 'src/app/core/services/avengers/data/avengers-list.config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
public avengerForm?: FormGroup;
public hasFormError:boolean=false;
public hasSucces:boolean=false

constructor(
  private formBuilder: FormBuilder,
  private avengerService:AvengerService,
  private router:Router
){
this.avengerForm=this.formBuilder.group({
  hero: new FormControl('',[Validators.required]),
  name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  link: new FormControl('', [Validators.required]),
  img: new FormControl('',[Validators.required]),
  isActive: ['', [Validators.required]],
  id: new FormControl('', [Validators.required])
})
}

public createAvenger(){
this.avengerService.createAvenger(this.avengerForm?.value).subscribe((avenger)=>{
  this.hasFormError=false;
  const continueCreating=window.confirm('Do you want to create another character?');
  if(!continueCreating){
    this.router.navigate(['../avengers-list'])
  }
})
};

}
