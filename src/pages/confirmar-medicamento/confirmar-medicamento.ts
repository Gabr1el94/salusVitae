import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PrepararMedicamentoPage } from '../preparar-medicamento/preparar-medicamento';

@Component({
  selector: 'page-confirmar-medicamento',
  templateUrl: 'confirmar-medicamento.html'
})
export class CorfirmarMedicamentoPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  goToSalusVitaeHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);

    let toast = this.toastCtrl.create({
      message: 'Paciente adicionado com sucesso',
      duration: 3000,
      position: 'center',
      cssClass: 'btn-check'
    });
  
    toast.present();
  }
  
  goToSalusVitaePreparaO(params){
    if (!params) params = {};
    this.navCtrl.push(PrepararMedicamentoPage);
  }
  
}
