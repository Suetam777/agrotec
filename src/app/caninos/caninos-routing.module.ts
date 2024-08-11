import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaninosPage } from './caninos.page';

const routes: Routes = [
  {
    path: '',
    component: CaninosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaninosPageRoutingModule {}
