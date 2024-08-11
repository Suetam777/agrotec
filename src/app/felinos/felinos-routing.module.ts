import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelinosPage } from './felinos.page';

const routes: Routes = [
  {
    path: '',
    component: FelinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FelinosPageRoutingModule {}
