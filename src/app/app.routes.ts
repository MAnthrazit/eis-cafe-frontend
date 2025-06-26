import { Routes } from '@angular/router';
import { HomeComponent } from './app.HomeComponent';
import { JobComponent } from './app.JobComponent';
import { DashboardComponent } from './app.DashboardComponent';
import { MenuComponent } from './app.MenuComponent';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'job', component: JobComponent},
  {path: 'dashboard', component: DashboardComponent},
];

export class AppRoutingModule { }
