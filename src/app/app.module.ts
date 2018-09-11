import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { SalusVitaeLoginPage } from '../pages/salus-vitae-login/salus-vitae-login';
import { SalusVitaeHomePage } from '../pages/salus-vitae-home/salus-vitae-home';
import { SalusVitaeConsumoPage } from '../pages/salus-vitae-consumo/salus-vitae-consumo';
import { PacientePage } from '../pages/paciente/paciente';
import { MedicamentoPage } from '../pages/medicamento/medicamento';
import { SalusVitaePacientePage } from '../pages/salus-vitae-paciente/salus-vitae-paciente';
import { SalusVitaePreparaOPage } from '../pages/salus-vitae-prepara-o/salus-vitae-prepara-o';
import { SalusVitaeDetalhesPage } from '../pages/salus-vitae-detalhes/salus-vitae-detalhes';
import { SalusVitaeMedicamentoPage } from '../pages/salus-vitae-medicamento/salus-vitae-medicamento';
import { SalusVitaeConfirmaOPage } from '../pages/salus-vitae-confirma-o/salus-vitae-confirma-o';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    SalusVitaeLoginPage,
    HomePage,
    SalusVitaeHomePage,
    SalusVitaeConsumoPage,
    PacientePage,
    MedicamentoPage,
    SalusVitaePacientePage,
    SalusVitaePreparaOPage,
    SalusVitaeDetalhesPage,
    SalusVitaeMedicamentoPage,
    SalusVitaeConfirmaOPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalusVitaeLoginPage,
    HomePage,
    SalusVitaeHomePage,
    SalusVitaeConsumoPage,
    PacientePage,
    MedicamentoPage,
    SalusVitaePacientePage,
    SalusVitaePreparaOPage,
    SalusVitaeDetalhesPage,
    SalusVitaeMedicamentoPage,
    SalusVitaeConfirmaOPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}