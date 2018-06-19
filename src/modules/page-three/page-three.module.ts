import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageThreeRoutingModule } from './page-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageThreeRoutingModule
  ],
  declarations: [
    PageThreeComponent
  ],
  exports: [
    PageThreeComponent,
  ]
})
export class PageThreeModule { }
