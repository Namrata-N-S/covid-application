import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidDetails } from './covid';
@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  constructor(private http: HttpClient) {}

  apiurl = 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports';
  getData(): Observable<CovidDetails> {
    return this.http.get<CovidDetails>(this.apiurl);
  }
}
