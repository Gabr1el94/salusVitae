import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AprazarMedicamentoPage } from '../aprazar-medicamento/aprazar-medicamento';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-detalhes-medicamento',
  templateUrl: 'detalhes-medicamento.html'
})
export class DetalhesMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }

  goToSalusVitaeMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(AprazarMedicamentoPage);
  }

  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }

}
