import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidDetails } from './covid';
import { Districts } from './districtDetails';
@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  constructor(private http: HttpClient) {}

  vaccinationDataURL =
    'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports';

  districtWiseData =
    'https://cdn-api.co-vin.in/api/v2/admin/location/districts/';

  getData(): Observable<CovidDetails> {
    return this.http.get<CovidDetails>(this.vaccinationDataURL);
  }

  getDistricts(queryString): Observable<Districts> {
    console.log(queryString);
    return this.http.get<Districts>(this.districtWiseData + (queryString + 1));
  }
}
