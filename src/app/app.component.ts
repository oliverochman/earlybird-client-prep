import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Angular2TokenService } from 'angular2-token-ionic3';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  currentUser: any;

  rootPage: any = HomePage;

  // I would suggest that you guys follow the guide 
  // in the cooper challenge to implement login.
  // But everything you need for it is in this application
  // The only difference is that I use another npm package
  // but it is based on the same one and has the same implemntation

  pages: Array<{title: string, component: any}>;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private _tokenService: Angular2TokenService,
    private alertCtrl: AlertController
  ) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000/api'
    });
    platform.ready().then(() => {
      _tokenService.init({
        // apiBase: 'https://ca-procurement.herokuapp.com/api/',
        apiBase: 'http://localhost:3000/api/',
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  loginPopUp() {
    console.log('popup');
    let confirm = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.login(data);
          }
        }
      ]
    });
    confirm.present();
  }

  login(credentials) {
    this._tokenService
      .signIn(credentials)
        .subscribe(
         res => (this.currentUser = res.json().data),
         err => console.error('error')
      );
  }

  logout() {
    this._tokenService
      .signOut()
      .subscribe(res => console.log(res), err => console.error('error'));
    this.currentUser = undefined;
  }
}
