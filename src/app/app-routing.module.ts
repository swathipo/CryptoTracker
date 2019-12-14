import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCoinsComponent } from './view-coins/view-coins.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: 'view' , component: ViewCoinsComponent
  },
  {
    path: 'details' , component: ViewDetailsComponent
  },
  {
    path: '' , redirectTo: '/view', pathMatch: 'full'
  },
  {
    path: '**' , redirectTo: '/view', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
