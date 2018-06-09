import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './components/page-one/page-one.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageOneComponent
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }
