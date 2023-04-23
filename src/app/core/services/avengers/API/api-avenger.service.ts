import {
  ApiAvengersListI,
  AvengersBodyRequest,
  AvengersListI,
} from 'src/app/core/services/avengers/models/avengers-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://643d9a3ef0ec48ce9060562d.mockapi.io/';

@Injectable({
  providedIn: 'root',
})
export class ApiAvengerService {
  constructor(private http: HttpClient) {}

  public getAllAvengers(): Observable<ApiAvengersListI[]> {
    return this.http.get<ApiAvengersListI[]>(`${API_URL}/avengerList`);
  }

  public getAllAvengerById(id: string): Observable<ApiAvengersListI> {
    return this.http.get<ApiAvengersListI>(`${API_URL}/avengerList/${id}`);
  }

  public createApiAvenger(
    body: AvengersBodyRequest
  ): Observable<ApiAvengersListI> {
    return this.http.post<ApiAvengersListI>(`${API_URL}/avengerList`, body);
  }

  public deleteApiAvenger(id: string): Observable<ApiAvengersListI> {
    return this.http.delete<ApiAvengersListI>(`${API_URL}/avengerList/${id}`);
  }
}
