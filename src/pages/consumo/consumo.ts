import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-consumo',
  templateUrl: 'consumo.html'
})
export class ConsumoPage {

  public isOwner: boolean = false;
 
  constructor(public navCtrl: NavController, public actionCtrl: AlertController) {
  }

  goToSalusVitaeHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
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
