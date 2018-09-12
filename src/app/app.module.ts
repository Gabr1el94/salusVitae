import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ConsumoPage } from '../pages/consumo/consumo';
import { PacientePage } from '../pages/paciente/paciente';
import { ScannerMedicamentoPage } from '../pages/scanner-medicamento/scanner-medicamento';
import { PrepararMedicamentoPage } from '../pages/preparar-medicamento/preparar-medicamento';
import { DetalhesMedicamentoPage } from '../pages/detalhes-medicamento/detalhes-medicamento';
import { AprazarMedicamentoPage } from '../pages/aprazar-medicamento/aprazar-medicamento';
import { CorfirmarMedicamentoPage } from '../pages/confirmar-medicamento/confirmar-medicamento';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ConsumoPage,
    PacientePage,
    ScannerMedicamentoPage,
    PrepararMedicamentoPage,
    DetalhesMedicamentoPage,
    AprazarMedicamentoPage,
    CorfirmarMedicamentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ConsumoPage,
    PacientePage,
    ScannerMedicamentoPage,
    PrepararMedicamentoPage,
    DetalhesMedicamentoPage,
    AprazarMedicamentoPage,
    CorfirmarMedicamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}