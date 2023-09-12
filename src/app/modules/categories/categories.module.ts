import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CategoriesPageComponent }]),
  ],
  exports: [CategoriesPageComponent],
})
export class CategoriesModule {}
