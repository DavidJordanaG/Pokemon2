import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallsPageRoutingModule } from './detalls-routing.module';

import { DetallsPage } from './detalls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallsPageRoutingModule
  ],
  declarations: [DetallsPage]
})
export class DetallsPageModule {}
