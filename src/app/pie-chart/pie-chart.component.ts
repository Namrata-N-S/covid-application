import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { VaccinationByAge } from '../covid';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [], //updating the series data from Input decorator()
      chart: {
        width: 380,
        type: 'donut'
      },
      labels: [
        'Vaccination between 18-45',
        'Vaccination between 45-60',
        'Above 60'
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }

  @Input() chartData?: VaccinationByAge;
  ngOnInit() {
    const data0 = [
      this.chartData.vac_18_45,
      this.chartData.vac_45_60,
      this.chartData.above_60
    ];
    this.chartOptions.series = data0;
  }
}
