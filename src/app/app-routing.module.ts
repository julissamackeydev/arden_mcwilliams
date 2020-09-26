import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { DrawingsComponent } from '../app/drawings/drawings.component';
import { LandingComponent } from '../app/landing/landing.component';
import { Landing2Component } from '../app/landing2/landing2.component';
import { Works3Component } from '../app/works3/works3.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { ContemporaryComponent } from './contemporary/contemporary.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'drawings', component: DrawingsComponent },
  { path: 'landing-2', component: Landing2Component },
  { path: 'works', component: Works3Component },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'contemporary', component: ContemporaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
