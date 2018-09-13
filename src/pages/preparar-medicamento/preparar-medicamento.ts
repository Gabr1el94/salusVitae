import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DetalhesMedicamentoPage } from '../detalhes-medicamento/detalhes-medicamento';
import { CorfirmarMedicamentoPage } from '../confirmar-medicamento/confirmar-medicamento';
import { PacientePage } from '../paciente/paciente';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AprazarMedicamentoPage } from '../aprazar-medicamento/aprazar-medicamento';

@Component({
  selector: 'page-preparar-medicamento',
  templateUrl: 'preparar-medicamento.html'
})
export class PrepararMedicamentoPage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {
  }

  goToSalusVitaeDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesMedicamentoPage);
  }

  scanMedication(){
    let options = {
      showTorchButton: true,
      prompt: 'Realize o scan do medicamento',
      resultDisplayDuration: 0
    }

    this.barcodeScanner.scan(options).then(barcodeData => {
      if (!barcodeData.cancelled) {
        this.navCtrl.push(AprazarMedicamentoPage).then(() => {
            let toast = this.toastCtrl.create({
              message: 'Scanned[' + barcodeData.format + ']: ' + barcodeData.text,
              showCloseButton: true,
              dismissOnPageChange: true
            });

            toast.present();
          });
      } else {
        this.navCtrl.push(PrepararMedicamentoPage).then(() => {
          let toast = this.toastCtrl.create({
            message: 'Error: Scanner cancelled',
            showCloseButton: true,
            dismissOnPageChange: true
          });
          
          toast.present();
        });
      }
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Error: ' + err,
        showCloseButton: true,
        dismissOnPageChange: true
      });
    
      toast.present();
    });
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
