import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurPlansComponent } from './pages/our-plans/our-plans.component';
import { SigMealComponent } from './pages/our-plans/sig-meal/sig-meal.component';
import { Page1SigComponent } from './pages/our-plans/sig-meal/page1-sig/page1-sig.component';
import { Page2SigComponent } from './pages/our-plans/sig-meal/page2-sig/page2-sig.component';
import { Page3SigComponent } from './pages/our-plans/sig-meal/page3-sig/page3-sig.component';
import { PopupComponent } from './shared/popup/popup.component';
import { CustomComponent } from './pages/our-plans/custom/custom.component';
import { Pagec1Component } from './pages/our-plans/custom/pagec1/pagec1.component';
import { Pagec2Component } from './pages/our-plans/custom/pagec2/pagec2.component';

const routes: Routes = [
  {
    path: 'ourplans', component: OurPlansComponent, children: [
      {
        path: 'sigmeal', component: SigMealComponent, children: [
          { path: 'page-1', component: Page1SigComponent },
          { path: 'page-2', component: Page2SigComponent },
          { path: 'page-3', component: Page3SigComponent },
        ]
      },
    {
      path:'custom',component:CustomComponent, children: [
        { path:'pagec1',component:Pagec1Component },
        { path:'pagec2',component:Pagec2Component}
      
      ]
    }]
  },
  { path: 'popup', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
