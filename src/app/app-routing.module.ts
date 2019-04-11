import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurPlansComponent } from './pages/our-plans/our-plans.component';
import { SigMealComponent } from './pages/our-plans/sig-meal/sig-meal.component';

const routes: Routes = [
  {
    path: 'ourplans', component: OurPlansComponent, children: [
      { path: 'sigmeal', component: SigMealComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
