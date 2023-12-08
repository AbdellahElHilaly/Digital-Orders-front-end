import {Routes} from '@angular/router';
import {HomeComponent} from "./core/view/pages/home/home.component";
import {NotFoundComponent} from "./core/view/pages/error/not-found/not-found.component";
import {DashboardComponent} from "./core/view/dashboard/dashboard.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},


  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},

];


