import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('modules/page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'page-one',
    loadChildren: () => import('modules/page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('modules/page-two/page-two.module').then(m => m.PageTwoModule)
  },
  {
    path: 'page-three',
    loadChildren: () => import('modules/page-three/page-three.module').then(m => m.PageThreeModule)
  },
  {
    path: 'page-four',
    loadChildren: () => import('modules/page-four/page-four.module').then(m => m.PageFourModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
