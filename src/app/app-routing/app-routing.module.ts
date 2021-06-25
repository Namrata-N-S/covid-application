import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationDetailsComponent } from '../vaccination-details/vaccination-details.component';
import { CovidDashboardComponent } from '../covid-dashboard/covid-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: CovidDashboardComponent
  },
  {
    path: 'vaccination/details',
    component: VaccinationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
