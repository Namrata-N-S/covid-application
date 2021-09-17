import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationDetailsComponent } from '../vaccination-details/vaccination-details.component';
import { CovidDashboardComponent } from '../covid-dashboard/covid-dashboard.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { AuthGuard } from './../auth.guard';
import { AdminGuard } from './../admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vaccination',
    pathMatch: 'full'
  },
  {
    path: 'vaccination',
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        component: CovidDashboardComponent
      },
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          {
            path: 'details',
            component: VaccinationDetailsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'feedback',
    component: FeedbackFormComponent
  },
  {
    path: 'lazyLoading',
    loadChildren: () =>
      import('./../lazy-loading/lazy-loading.module').then(
        m => m.LazyLoadingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
