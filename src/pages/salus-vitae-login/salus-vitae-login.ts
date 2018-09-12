import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { ToastController } from 'ionic-angular';
/*
import { SalusVitaeConsumoPage } from '../salus-vitae-consumo/salus-vitae-consumo';
import { PacientePage } from '../paciente/paciente';
import { SalusVitaePacientePage } from '../salus-vitae-paciente/salus-vitae-paciente';
import { SalusVitaePreparaOPage } from '../salus-vitae-prepara-o/salus-vitae-prepara-o';
import { SalusVitaeDetalhesPage } from '../salus-vitae-detalhes/salus-vitae-detalhes';
import { SalusVitaeMedicamentoPage } from '../salus-vitae-medicamento/salus-vitae-medicamento';
import { MedicamentoPage } from '../medicamento/medicamento';
import { SalusVitaeConfirmaOPage } from '../salus-vitae-confirma-o/salus-vitae-confirma-o';
*/
@Component({
  selector: 'page-salus-vitae-login',
  templateUrl: 'salus-vitae-login.html'
})
export class SalusVitaeLoginPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }
  goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
    let toast = this.toastCtrl.create({
      message: 'Bem vindo ao Salus Vitae',
      duration: 3000,
      position: 'center'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  /*
  goToSalusVitaeConsumo(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConsumoPage);
  }goToPaciente(params){
    if (!params) params = {};
    this.navCtrl.push(PacientePage);
  }goToSalusVitaePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePacientePage);
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
  */
}
