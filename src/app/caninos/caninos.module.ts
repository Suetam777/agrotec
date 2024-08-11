import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaninosPageRoutingModule } from './caninos-routing.module';

import { CaninosPage } from './caninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaninosPageRoutingModule
  ],
  declarations: [CaninosPage]
})
export class CaninosPageModule {}
