import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteGeralPage } from './paciente-geral';

@NgModule({
  declarations: [
    PacienteGeralPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteGeralPage),
  ],
})
export class PacienteGeralPageModule {}
