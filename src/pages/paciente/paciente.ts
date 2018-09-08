import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaePacientePage } from '../salus-vitae-paciente/salus-vitae-paciente';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { SalusVitaeConsumoPage } from '../salus-vitae-consumo/salus-vitae-consumo';
import { SalusVitaePreparaOPage } from '../salus-vitae-prepara-o/salus-vitae-prepara-o';
import { SalusVitaeDetalhesPage } from '../salus-vitae-detalhes/salus-vitae-detalhes';
import { SalusVitaeMedicamentoPage } from '../salus-vitae-medicamento/salus-vitae-medicamento';
import { MedicamentoPage } from '../medicamento/medicamento';
import { SalusVitaeConfirmaOPage } from '../salus-vitae-confirma-o/salus-vitae-confirma-o';

@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html'
})
export class PacientePage {

  constructor(public navCtrl: NavController) {
  }
  goToSalusVitaePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePacientePage);
  }goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
  }goToSalusVitaeConsumo(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConsumoPage);
  }goToPaciente(params){
    if (!params) params = {};
    this.navCtrl.push(PacientePage);
  }goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePreparaOPage);
  }goToSalusVitaeDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeDetalhesPage);
  }goToSalusVitaeMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeMedicamentoPage);
  }goToMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(MedicamentoPage);
  }goToSalusVitaeConfirmaO(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConfirmaOPage);
  }
}
