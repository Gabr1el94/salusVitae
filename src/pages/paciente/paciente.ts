import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html'
})
export class PacientePage {

  constructor(public navCtrl: NavController) {
  }

  goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
  
  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }
  
}
