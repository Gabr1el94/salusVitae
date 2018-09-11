import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalusVitaeHomePage } from '../salus-vitae-home/salus-vitae-home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-salus-vitae-consumo',
  templateUrl: 'salus-vitae-consumo.html'
})
export class SalusVitaeConsumoPage {

  public isOwner: boolean = false;
 
  constructor(public navCtrl: NavController, public actionCtrl: AlertController) {
  }

  goToSalusVitaeHome(params) {
    if (!params) params = {};
    this.navCtrl.push(SalusVitaeHomePage);
  }

  buttonClick() {
      this.isOwner = !this.isOwner;
      
  }

  confirm(){
    this.showConfirm()
  }

  showConfirm() {
    const confirm = this.actionCtrl.create({
      title: 'Deseja Ministrar este medicamento?',
      message: 'Após ministrado a ação não poderar ser desfeita',
      buttons: [
        {
          text: 'Não ministrar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ministrar',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();
  }
}
