import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Equipment } from '../models/equipment';
import { HttpResponse } from '../models/http-response';
import 'rxjs/add/operator/map';

@Injectable()
export class EquipmentService {
  env = environment;

  constructor(private httpClient: HttpClient) { }

  getAllEquipmentForCurrentUser(): Observable<Equipment[]> {
    return this.httpClient.get(this.env.apiPath + 'equipments').map(
      (response: HttpResponse) => response.response as Equipment[]
    );
  }

  getEquipmentById(id: number): Observable<Equipment> {
    return this.httpClient.get(this.env.apiPath + 'equipments/' + id).map(
      (response: HttpResponse) => response.response[0] as Equipment
    );
  }

}
