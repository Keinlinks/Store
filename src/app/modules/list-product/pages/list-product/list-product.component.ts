import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  search: string = '';
  constructor(private activedRoute: ActivatedRoute) {
    activedRoute.queryParamMap.subscribe((params) => {
      this.search = params.get('search') || '';
    });
  }
}
