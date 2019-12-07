import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { Works1Component } from './works1/works1.component';
import { Landing2Component } from './landing2/landing2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Works2Component } from './works2/works2.component';
import { Works3Component } from './works3/works3.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Works1Component,
    Landing2Component,
    AboutComponent,
    ContactComponent,
    Works2Component,
    Works3Component
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
