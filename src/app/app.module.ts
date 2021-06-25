import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CovidDashboardComponent,
    VaccinationDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
