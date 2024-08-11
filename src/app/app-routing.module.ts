import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'caninos',
    loadChildren: () => import('./caninos/caninos.module').then(m => m.CaninosPageModule)
  },
  {
    path: 'felinos',
    loadChildren: () => import('./felinos/felinos.module').then(m => m.FelinosPageModule)
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./sobrenos/sobrenos.module').then(m => m.SobrenosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
