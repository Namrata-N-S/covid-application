import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StateWiseDetailsComponent } from './state-wise-details/state-wise-details.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  declarations: [
    AppComponent,
    CovidDashboardComponent,
    VaccinationDetailsComponent,
    StateWiseDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
