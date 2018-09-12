import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesMedicamentoPage } from '../detalhes-medicamento/detalhes-medicamento';
import { ScannerMedicamentoPage } from '../scanner-medicamento/scanner-medicamento';
import { CorfirmarMedicamentoPage } from '../confirmar-medicamento/confirmar-medicamento';
import { PacientePage } from '../paciente/paciente';

@Component({
  selector: 'page-preparar-medicamento',
  templateUrl: 'preparar-medicamento.html'
})
export class PrepararMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }

  goToSalusVitaeDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesMedicamentoPage);
  }

  goToMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerMedicamentoPage);
  }

  goToSalusVitaeConfirmaO(params){
    if (!params) params = {};
    this.navCtrl.push(CorfirmarMedicamentoPage);
  }
  
  goToSalusVitaePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(PacientePage);
  }

}
