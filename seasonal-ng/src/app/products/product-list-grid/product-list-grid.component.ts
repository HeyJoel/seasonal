import { Component, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../data/models/product';
import { Category } from '../data/models/category';
import { ProductSearchCriteria } from '../data/models/product-search-criteria';

@Component({
  selector: 'app-product-list-grid',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.scss']
})
export class ProductListGridComponent implements OnInit {

  filteredProducts!: Observable<Product[]>;

  constructor(
  ) { }

  @Input() category!: Category;
  @Input() products!: Observable<Product[]>;
  @Input() searchCriteria!: ProductSearchCriteria;

  ngOnInit(): void {

    this.filteredProducts = this.products
      .pipe(map(p => p
        .filter(p => p.category.categoryId === this.category.categoryId)
      ));
  }
}
