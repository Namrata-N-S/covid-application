import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  constructor(private http: HttpClient) {}

  apiurl = 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports';
  getData(): Observable<Object> {
    return of('/assets/data/people.json');
  }
}
