import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrderPage } from '../pages/order/order';
import { AlamatPage } from '../pages/alamat/alamat';
import { DaftarPage } from '../pages/daftar/daftar';
import { TabsPage } from '../pages/tabs/tabs';
import { ReviewPage } from '../pages/review/review';
import { KonfirmasiPage } from '../pages/konfirmasi/konfirmasi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    OrderPage,
    AlamatPage,
    DaftarPage,
    TabsPage,
    ReviewPage,
    KonfirmasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrderPage,
    AlamatPage,
    DaftarPage,
    TabsPage,
    ReviewPage,
    KonfirmasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
