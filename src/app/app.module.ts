import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { app } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ServicePage } from '../pages/service/service';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    app,
    AboutPage,
    ContactPage,
    HomePage,
    ServicePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(app)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    app,
    AboutPage,
    ContactPage,
    HomePage,
     ServicePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
