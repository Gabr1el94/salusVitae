import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('content') nav: NavController;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      if (platform.is('android')) {
        statusBar.styleBlackOpaque();
      }
    });
  }

  isLogged() {
    return this.nav.getActive() != null &&
     !(this.nav.getActive().instance instanceof LoginPage);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
  
}
