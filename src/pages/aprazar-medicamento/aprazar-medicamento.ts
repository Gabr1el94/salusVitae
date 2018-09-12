import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-aprazar-medicamento',
  templateUrl: 'aprazar-medicamento.html'
})
export class AprazarMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }

  
}
