import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
import { CovidDetails } from '../covid';
@Component({
  selector: 'app-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}

  details: CovidDetails;
  ngOnInit() {
    this.getVaccinationDetails();
  }

  getVaccinationDetails(): void {
    this.covidDetailsService.getData().subscribe(data => (this.details = data));
  }
}
