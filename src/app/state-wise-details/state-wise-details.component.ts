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
  selectedStateId: number = 0;
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
  }
}
