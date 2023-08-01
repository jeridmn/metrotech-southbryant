import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplaysComponent } from './activities/displays/displays.component';
import { CamerasComponent } from './activities/cameras/cameras.component';
import { RoutingComponent } from './activities/routing/routing.component';
import { LightingComponent } from './activities/lighting/lighting.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: SplashPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'displays', component: DisplaysComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'camera', component: CamerasComponent},
  {path: 'lighting', component: LightingComponent},
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {​​​​​​ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
