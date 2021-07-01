import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
import { CovidDetails } from '../covid';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}
  DATA$: CovidDetails;
  ngOnInit() {
    this.fetchData();
    console.log(this.DATA$);
  }
  fetchData(): void {
    this.covidDetailsService.getData().subscribe(data => (this.DATA$ = data));
  }
}
