import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { LandingComponent } from '../app/landing/landing.component';
import { Landing2Component } from '../app/landing2/landing2.component';
import { Works1Component } from '../app/works1/works1.component';
import { Works2Component } from '../app/works2/works2.component';
import { Works3Component } from '../app/works3/works3.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'landing-2', component: Landing2Component },
  { path: 'works-1', component: Works1Component },
  { path: 'works-2', component: Works2Component },
  { path: 'works-3', component: Works3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
