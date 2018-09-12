import { Component } from '@angular/core';
import { NavController, ToastController, Toast } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  toast: Toast;
  credentials = { name: '', password: '' };

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  login(){
    if (this.credentials.name.toLocaleLowerCase() === 'enfermeira' && this.credentials.password === '123') {
      this.navCtrl.setRoot(HomePage);
    } else {
      if (this.toast !== undefined) {
        this.toast.dismiss();
      }

      this.toast = this.toastCtrl.create({
        message: 'Usuário ou/e senha incorreto(s).',
        showCloseButton: true,
        closeButtonText: 'Fechar',
        dismissOnPageChange: true
      });

      this.toast.present();
    }
  }

}
