import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-salus-vitae-consumo',
  templateUrl: 'salus-vitae-consumo.html'
})
export class SalusVitaeConsumoPage {

  public isOwner: boolean = false;
 
  constructor(public navCtrl: NavController, public actionCtrl: AlertController) {
  }

  goToSalusVitaeHome(params) {
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
  }

  buttonClick() {
      this.isOwner = !this.isOwner;
  }
}
