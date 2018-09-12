import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-aprazar-medicamento',
  templateUrl: 'aprazar-medicamento.html'
})
export class AprazarMedicamentoPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  cancelarMedicamento(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }
  
  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
    let toast = this.toastCtrl.create({
      message: 'Medicamento salvo com sucesso',
      duration: 3000,
      position: 'center',
      cssClass: 'btn-check'
    });
     toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
}
