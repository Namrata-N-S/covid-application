import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}
  DATA$;
  ngOnInit() {}
  fetchData() {
    this.DATA$ = this.covidDetailsService.getData();
  }
}
