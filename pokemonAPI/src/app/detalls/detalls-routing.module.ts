import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallsPage } from './detalls.page';

const routes: Routes = [
  {
    path: '',
    component: DetallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallsPageRoutingModule {}
