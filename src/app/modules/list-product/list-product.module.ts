import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { RouterModule } from '@angular/router';
import { CardItemListComponent } from './components/card-item-list/card-item-list.component';
@NgModule({
  declarations: [ListProductComponent, CardItemListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':category',
        component: ListProductComponent,
      },
    ]),
  ],
})
export class ListProductModule {}
