import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CovidDashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
