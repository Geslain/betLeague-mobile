import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { SitAndGoPage } from '../pages/sitAndGo/sitAndGo';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PodiumPage} from "../pages/podium/podium";
import {PrognosisPage} from "../pages/prognosis/prognosis";
import {PrognosisEventPage} from "../pages/prognosis-event/prognosis-event";

@NgModule({
  declarations: [
    MyApp,
    SitAndGoPage,
    TeamsPage,
    HomePage,
    TabsPage,
    PodiumPage,
    PrognosisPage,
    PrognosisEventPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SitAndGoPage,
    TeamsPage,
    HomePage,
    TabsPage,
    PodiumPage,
    PrognosisPage,
    PrognosisEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
