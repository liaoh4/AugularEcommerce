import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./component/component.component";



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
