import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchResultPage } from '../pages/search-result/search-result';
import { MobileNumbersPage } from '../pages/mobile-numbers/mobile-numbers';
import { AddAdvertismentPage } from '../pages/add-advertisment/add-advertisment';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfileModalPage } from '../pages/edit-profile-modal/edit-profile-modal';
import { ShowroomPage } from '../pages/showroom/showroom';
import { LoginPage } from '../pages/login/login';

import { SearchFilterPage } from '../pages/search-filter/search-filter';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchResultPage,
    SearchFilterPage,
    MobileNumbersPage,
    AddAdvertismentPage,
    ProfilePage,
    EditProfileModalPage,
    ShowroomPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchResultPage,
    SearchFilterPage,
    MobileNumbersPage,
    AddAdvertismentPage,
    ProfilePage,
    EditProfileModalPage,
    ShowroomPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule { }
