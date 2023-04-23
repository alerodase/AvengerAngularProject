import { Injectable } from '@angular/core';
import { ApiAvengerService } from './API/api-avenger.service';
import { Observable, map } from 'rxjs';
import {
  ApiAvengersListI,
  AvengersBodyRequest,
  AvengersListI,
} from './models/avengers-interface';

@Injectable({
  providedIn: 'root',
})
export class AvengerService {
  constructor(private apiAvengersservice: ApiAvengerService) {}

  public getAvengers(): Observable<AvengersListI[]> {
    return this.apiAvengersservice
      .getAllAvengers()
      .pipe(
        map((avengers: ApiAvengersListI[]) => this.transformAvengers(avengers))
      );
  }

  public getAvengerById(id: string): Observable<AvengersListI> {
    return this.apiAvengersservice
      .getAllAvengerById(id)
      .pipe(
        map((avengersList: ApiAvengersListI) =>
          this.transformAvenger(avengersList)
        )
      );
  }

  public createAvenger(body: AvengersBodyRequest): Observable<AvengersListI> {
    return this.apiAvengersservice
      .createApiAvenger(body)
      .pipe(map((AvengersList) => this.transformAvenger(AvengersList)));
  }

  public deleteAvenger(id: string): Observable<AvengersListI> {
    return this.apiAvengersservice
      .deleteApiAvenger(id)
      .pipe(
        map((avengersList: ApiAvengersListI) =>
          this.transformAvenger(avengersList)
        )
      );
  }

  private transformAvengers(
    ApiAvengersList: ApiAvengersListI[]
  ): AvengersListI[] {
    const avengerTransformed = ApiAvengersList.map((avenger) =>
      this.transformAvenger(avenger)
    );
    return avengerTransformed;
  }

  private transformAvenger(avengersList: ApiAvengersListI): AvengersListI {
    delete avengersList.isActive;
    return avengersList;
  }
}
