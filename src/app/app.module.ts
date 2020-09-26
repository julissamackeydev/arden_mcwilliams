import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { Landing2Component } from './landing2/landing2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Works3Component } from './works3/works3.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { ContemporaryComponent } from './contemporary/contemporary.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Landing2Component,
    AboutComponent,
    ContactComponent,
    Works3Component,
    DrawingsComponent,
    CommissionsComponent,
    ContemporaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
