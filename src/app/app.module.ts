import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StateWiseDetailsComponent } from './state-wise-details/state-wise-details.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { LazyGuard } from './lazy.guard';
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
    PieChartComponent,
    StateWiseDetailsComponent,
    FeedbackFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AdminGuard, LazyGuard]
})
export class AppModule {}
