import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Building } from '../entity/building';
import { Observable } from 'rxjs';

/*@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {

  constructor() { }
}*/

@Injectable()
export class BuildingService {
  
  private buildingUrl: string;

  constructor( private http: HttpClient ) {
    this.buildingUrl = 'http://localhost:8080/api/v1/building/getAll';
  }

  public findAll(): Observable<Building[]> {
    return this.http.get<Building[]>(this.buildingUrl);
  }

  public save(building: Building) {
    return this.http.post<Building>(this.buildingUrl, building);
  }

}
