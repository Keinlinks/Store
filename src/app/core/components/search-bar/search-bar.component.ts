import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  @ViewChild('search') search!: ElementRef;
  submit(event: Event) {
    event.preventDefault();
    const word: string = this.search.nativeElement.value;
    if (word) {
      const queryParams = {
        search: word,
      };
      const navigationExtras = {
        queryParams: queryParams,
        replaceUrl: true,
      };

      this.router
        .navigate(['/list-product/todo'], navigationExtras)
        .then(() => {
          this.search.nativeElement.value = '';
        });
    }
  }
}
