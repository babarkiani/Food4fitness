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
    CustomComponent
    
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
