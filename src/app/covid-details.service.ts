import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CovidDetails } from './covid';

@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  constructor(private http: HttpClient) {}

  vaccinationDataURL =
    'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports';

  getData(): Observable<CovidDetails> {
    return this.http.get<CovidDetails>(this.vaccinationDataURL).pipe(
      catchError(error => {
        console.log('caught in catch error, returning 0');
        return of(null);
      })
    );
  }

  getDistrictData(state): Observable<CovidDetails> {
    const url = `${this.vaccinationDataURL}?state_id=${state}`;
    return this.http.get<CovidDetails>(url);
  }
}
