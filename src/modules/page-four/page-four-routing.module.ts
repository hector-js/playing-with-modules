import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageFourComponent } from './components/page-four/page-four.component';

const routes: Routes = [
  {
    path: '',
    component: PageFourComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageFourRoutingModule { }
