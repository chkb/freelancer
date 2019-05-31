import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SearchFreelancerComponent } from './components/freelancer/search-freelancer/search-freelancer.component';
import { CreateFreelancerComponent } from './components/freelancer/create-freelancer/create-freelancer.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'freelancer/search',
    component: SearchFreelancerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'freelancer/create',
    component: CreateFreelancerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
