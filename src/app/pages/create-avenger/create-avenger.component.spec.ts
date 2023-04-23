import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvengerComponent } from './create-avenger.component';

describe('CreateAvengerComponent', () => {
  let component: CreateAvengerComponent;
  let fixture: ComponentFixture<CreateAvengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAvengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
