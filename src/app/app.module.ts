import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import WebXPanel, { WebXPanelConfigParams, WebXPanelEvents, isActive } from '@crestron/ch5-webxpanel';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DisplaysComponent } from './activities/displays/displays.component';
import { RoutingComponent } from './activities/routing/routing.component';
import { CamerasComponent } from './activities/cameras/cameras.component';
import { LightingComponent } from './activities/lighting/lighting.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioPopupComponent } from './audio-popup/audio-popup.component';
import { VolumeComponent } from './volume/volume.component';
import { PowerPopupComponent } from './power-popup/power-popup.component';

// Enter your processor IP/hostname and panel IP-ID
const configuration: Partial<WebXPanelConfigParams> = {
  host: '192.168.4.80',
  ipId: '3'
};

const webXPanelFactory = () => () => {
  if (isActive) { // This conditional checks if the SPA is running on a Crestron touch panel
    WebXPanel.addEventListener(WebXPanelEvents.LICENSE_WS, ((detail: any) => { console.log(detail); }));
    WebXPanel.initialize(configuration);
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HomePageComponent,
    HeaderComponent,
    DisplaysComponent,
    RoutingComponent,
    CamerasComponent,
    LightingComponent,
    MenuComponent,
    AudioPopupComponent,
    VolumeComponent,
    PowerPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: './'},  // Required for Crestron panel to establish "base", or index, of SPA and load correctly
  {provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true}], // For Web XPanel support],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
