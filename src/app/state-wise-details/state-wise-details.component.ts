import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
import { Districts } from '../districtDetails';
import { CovidDetails, GetBeneficiariesGroupBy } from '../covid';
@Component({
  selector: 'app-state-wise-details',
  templateUrl: './state-wise-details.component.html',
  styleUrls: ['./state-wise-details.component.css']
})
export class StateWiseDetailsComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}

  statesInfo: GetBeneficiariesGroupBy[];
  distInfo: CovidDetails;
  selectedStateId: number = 0;
  districts: Districts;
  ngOnInit() {
    this.getState();
  }

  getState(): void {
    this.covidDetailsService
      .getData()
      .subscribe(data => (this.statesInfo = data.getBeneficiariesGroupBy));
  }

  selectedState(state): void {
    this.selectedStateId = parseInt(state.value) - 1;
    this.getDistrictDetails();
  }

  getDistrictDetails(): void {
    this.covidDetailsService
      .getDistricts(this.selectedStateId)
      .subscribe(data => {
        this.districts = data;
      });
  }

  displayDistData(district): void {
    this.covidDetailsService
      .getDistrictData(this.selectedStateId + 1, district.value)
      .subscribe(data => {
        this.distInfo = data;
        console.log(this.distInfo);
      });
  }
}
