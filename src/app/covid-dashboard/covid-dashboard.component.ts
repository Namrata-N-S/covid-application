import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
import { CovidDetails, VaccinationByAge } from '../covid';

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}
  VaccinationDATA$: CovidDetails;
  chartData$: VaccinationByAge;
  ngOnInit() {
    this.fetchData();
  }
  fetchData(): void {
    this.covidDetailsService.getData().subscribe(data => {
      this.VaccinationDATA$ = data;
      this.chartData$ = this.VaccinationDATA$.vaccinationByAge;
    });
  }
}
