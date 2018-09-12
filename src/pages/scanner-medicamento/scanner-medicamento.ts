import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AprazarMedicamentoPage } from '../aprazar-medicamento/aprazar-medicamento';

@Component({
  selector: 'page-scanner-medicamento',
  templateUrl: 'scanner-medicamento.html'
})
export class ScannerMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }

  goToSalusVitaeMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(AprazarMedicamentoPage);
  }

}
