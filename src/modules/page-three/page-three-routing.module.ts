import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageThreeComponent } from './components/page-three/page-three.component';

const routes: Routes = [
  {
    path: '',
    component: PageThreeComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageThreeRoutingModule { }
