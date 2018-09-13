import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ConsumoPage } from '../consumo/consumo';
import { PacientePage } from '../paciente/paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment: string = "aprazamentos";

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {
  }

  goToSalusVitaeConsumo(params){
    if (!params) params = {};
    this.navCtrl.push(ConsumoPage);
  }

  startScan() {
    let options = {
      showTorchButton: true,
      prompt: 'Realize o scan da pulseira do paciente',
      resultDisplayDuration: 0
    }

    this.barcodeScanner.scan(options).then(barcodeData => {
      if (!barcodeData.cancelled) {
        this.navCtrl.push(PacientePage).then(() => {
            let toast = this.toastCtrl.create({
              message: 'Scanned[' + barcodeData.format + ']: ' + barcodeData.text + ', ' + barcodeData.cancelled,
              showCloseButton: true,
              dismissOnPageChange: true
            });

            toast.present();
          });
      } else {
        this.navCtrl.setRoot(HomePage).then(() => {
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

}
