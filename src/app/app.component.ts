import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SalusVitaeLoginPage } from '../pages/salus-vitae-login/salus-vitae-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('content') nav: NavController;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  isLogged() {
    return this.nav.getActive() != null &&
     !(this.nav.getActive().instance instanceof HomePage ||
     this.nav.getActive().instance instanceof SalusVitaeLoginPage);
  }
  
}
