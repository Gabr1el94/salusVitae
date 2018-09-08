import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaePreparaOPage } from '../salus-vitae-prepara-o/salus-vitae-prepara-o';
import { SalusVitaeDetalhesPage } from '../salus-vitae-detalhes/salus-vitae-detalhes';
import { MedicamentoPage } from '../medicamento/medicamento';
import { SalusVitaeConfirmaOPage } from '../salus-vitae-confirma-o/salus-vitae-confirma-o';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { SalusVitaeConsumoPage } from '../salus-vitae-consumo/salus-vitae-consumo';
import { PacientePage } from '../paciente/paciente';
import { SalusVitaePacientePage } from '../salus-vitae-paciente/salus-vitae-paciente';

@Component({
  selector: 'page-salus-vitae-medicamento',
  templateUrl: 'salus-vitae-medicamento.html'
})
export class SalusVitaeMedicamentoPage {

  constructor(public navCtrl: NavController) {
  }
  goToSalusVitaePreparaO(params){
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
