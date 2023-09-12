import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page/item-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: ItemPageComponent,
  },
];

@NgModule({
  declarations: [ItemPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ItemPageComponent],
})
export class ItemPageModule {}
