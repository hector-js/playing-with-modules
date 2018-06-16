import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageTwoComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageTwoRoutingModule { }
