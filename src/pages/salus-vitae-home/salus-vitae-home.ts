import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SalusVitaeConsumoPage } from '../salus-vitae-consumo/salus-vitae-consumo';
import { PacientePage } from '../paciente/paciente';
import { SalusVitaePacientePage } from '../salus-vitae-paciente/salus-vitae-paciente';
import { SalusVitaePreparaOPage } from '../salus-vitae-prepara-o/salus-vitae-prepara-o';
import { SalusVitaeDetalhesPage } from '../salus-vitae-detalhes/salus-vitae-detalhes';
import { SalusVitaeMedicamentoPage } from '../salus-vitae-medicamento/salus-vitae-medicamento';
import { MedicamentoPage } from '../medicamento/medicamento';
import { SalusVitaeConfirmaOPage } from '../salus-vitae-confirma-o/salus-vitae-confirma-o';

@Component({
  selector: 'page-salus-vitae-home',
  templateUrl: 'salus-vitae-home.html'
})
export class SalusVitaeHomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {
    
  }

  goToSalusVitaeConsumo(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeConsumoPage);
  }goToPaciente(params){
    if (!params) params = {};
    this.navCtrl.push(PacientePage);
  }goToSalusVitaePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaePacientePage);
  }goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
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

  startScan() {
    let options = {
      showTorchButton: true,
      prompt: 'Realize o scan da pulseira do paciente',
      resultDisplayDuration: 0
    }

    this.barcodeScanner.scan(options).then(barcodeData => {
      this.navCtrl.push(SalusVitaePacientePage).then(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Scanned[' + barcodeData.format + ']: ' + barcodeData.text,
            showCloseButton: true,
            dismissOnPageChange: true
          });
          toast.present();
        }
      );
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Error: ' + err,
        showCloseButton: true,
        dismissOnPageChange: true
      });
    
      toast.present();
    });
  }

}
