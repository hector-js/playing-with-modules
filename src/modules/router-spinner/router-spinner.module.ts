import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWithSpinnerComponent } from './components/router-with-spinner/router-with-spinner.component';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    RouterWithSpinnerComponent
  ],
  exports: [
    RouterWithSpinnerComponent
  ]
})
export class RouterSpinnerModule { }
