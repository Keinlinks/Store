import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardFeaturesComponent } from './components/card-features/card-features.component';
import { RouterModule } from '@angular/router';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [HomePageComponent, CardFeaturesComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CategoriesModule,
    RouterModule,
  ],
  exports: [HomePageComponent],
})
export class HomeModule {}
