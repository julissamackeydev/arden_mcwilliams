import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/landing/landing.component';
import { Landing2Component } from '../app/landing2/landing2.component';
import { Works1Component } from '../app/works1/works1.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing-2', component: Landing2Component },
  { path: 'works-1', component: Works1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
