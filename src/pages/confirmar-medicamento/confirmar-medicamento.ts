import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-confirmar-medicamento',
  templateUrl: 'confirmar-medicamento.html'
})
export class CorfirmarMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }
  goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  
  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }
  
}
