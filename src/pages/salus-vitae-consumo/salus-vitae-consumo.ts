import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';

@Component({
  selector: 'page-salus-vitae-consumo',
  templateUrl: 'salus-vitae-consumo.html'
})
export class SalusVitaeConsumoPage {

  constructor(public navCtrl: NavController) {
  }

  goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
  }
  
}
