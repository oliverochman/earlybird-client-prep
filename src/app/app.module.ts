import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token-ionic3';

import { InAppBrowser } from '@ionic-native/in-app-browser';
// If you guys are going to use the same package as me
// its importand that you import the InAppBrowser aswell

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ArticleShowPage } from '../pages/article-show/article-show';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticleProvider } from '../providers/article/article';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticleShowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    RouterModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArticleShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Angular2TokenService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticleProvider,
    InAppBrowser
  ]
})
export class AppModule {}
