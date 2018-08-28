import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComunicacionesPage } from './comunicaciones';

@NgModule({
  declarations: [
    ComunicacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ComunicacionesPage),
  ],
})
export class ComunicacionesPageModule {}
