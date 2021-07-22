import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../covid-details.service';
import { GetBeneficiariesGroupBy } from '../covid';
@Component({
  selector: 'app-state-wise-details',
  templateUrl: './state-wise-details.component.html',
  styleUrls: ['./state-wise-details.component.css']
})
export class StateWiseDetailsComponent implements OnInit {
  constructor(private covidDetailsService: CovidDetailsService) {}

  statesInfo: GetBeneficiariesGroupBy[];
  distInfo: GetBeneficiariesGroupBy[];
  selectedStateId: number = 0;
  selectedDistrict: string;
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
    this.getDistData(this.selectedStateId);
  }

  getDistData(state): void {
    this.covidDetailsService.getDistrictData(state + 1).subscribe(data => {
      this.distInfo = data.getBeneficiariesGroupBy;
    });
  }

  displayDistData(selectedDistrict): void {
    this.selectedDistrict = selectedDistrict.value;
  }
}
