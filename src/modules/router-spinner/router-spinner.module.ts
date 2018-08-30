import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterSpinnerComponent } from './components/router-spinner/router-spinner.component';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    RouterSpinnerComponent
  ],
  exports: [
    RouterSpinnerComponent
  ]
})
export class RouterSpinnerModule { }
