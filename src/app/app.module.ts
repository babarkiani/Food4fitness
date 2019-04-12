import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {OurPlansComponent} from './pages/our-plans/our-plans.component';
import {SigMealComponent} from './pages/our-plans/sig-meal/sig-meal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';

import { Page1SigComponent } from './pages/our-plans/sig-meal/page1-sig/page1-sig.component';
import { Page2SigComponent } from './pages/our-plans/sig-meal/page2-sig/page2-sig.component';
import { Page3SigComponent } from './pages/our-plans/sig-meal/page3-sig/page3-sig.component';

import { PopupComponent } from './shared/popup/popup.component';
import { CustomComponent } from './pages/our-plans/custom/custom.component';
import { Pagec1Component } from './pages/our-plans/custom/pagec1/pagec1.component';
import { Pagec2Component } from './pages/our-plans/custom/pagec2/pagec2.component';
import { Page4SigComponent } from './pages/our-plans/sig-meal/page4-sig/page4-sig.component';
import { Pagec3Component } from './pages/our-plans/custom/pagec3/pagec3.component';
import { Pagec4Component } from './pages/our-plans/custom/pagec4/pagec4.component';
import { BulkComponent } from './pages/our-plans/bulk/bulk.component';
import{Pageb1Component}from'./pages/our-plans/bulk/pageb1/pageb1.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent,
    FooterComponent,
    OurPlansComponent,
    SigMealComponent,
    Page1SigComponent,
    Page2SigComponent,
    Page3SigComponent,
    CustomComponent,
    Pagec1Component,
    Pagec2Component,
    Page4SigComponent,
    Pagec3Component,
    Pagec4Component,
    BulkComponent,
    Pageb1Component

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
