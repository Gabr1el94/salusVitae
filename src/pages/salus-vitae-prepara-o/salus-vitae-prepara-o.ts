import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaeDetalhesPage } from '../salus-vitae-detalhes/salus-vitae-detalhes';
import { SalusVitaeMedicamentoPage } from '../salus-vitae-medicamento/salus-vitae-medicamento';
import { MedicamentoPage } from '../medicamento/medicamento';
import { SalusVitaeConfirmaOPage } from '../salus-vitae-confirma-o/salus-vitae-confirma-o';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { SalusVitaeConsumoPage } from '../salus-vitae-consumo/salus-vitae-consumo';
import { PacientePage } from '../paciente/paciente';
import { SalusVitaePacientePage } from '../salus-vitae-paciente/salus-vitae-paciente';

@Component({
  selector: 'page-salus-vitae-prepara-o',
  templateUrl: 'salus-vitae-prepara-o.html'
})
export class SalusVitaePreparaOPage {

  constructor(public navCtrl: NavController) {
  }
  goToSalusVitaeDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeDetalhesPage);
  }goToSalusVitaeMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeMedicamentoPage);
  }goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePreparaOPage);
  }goToMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(MedicamentoPage);
  }goToSalusVitaeConfirmaO(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConfirmaOPage);
  }goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
  }goToSalusVitaeConsumo(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConsumoPage);
  }goToPaciente(params){
    if (!params) params = {};
    this.navCtrl.push(PacientePage);
  }goToSalusVitaePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePacientePage);
  }
}
