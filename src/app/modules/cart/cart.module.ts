import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RouterModule } from '@angular/router';
import { CardCartComponent } from './components/card-cart/card-cart.component';

@NgModule({
  declarations: [CartPageComponent, CardCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartPageComponent }]),
  ],
})
export class CartModule {}
