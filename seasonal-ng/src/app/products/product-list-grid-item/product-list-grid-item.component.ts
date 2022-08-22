import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/models/product';
import { ProductSearchCriteria } from '../data/models/product-search-criteria';

@Component({
  selector: 'app-product-list-grid-item',
  templateUrl: './product-list-grid-item.component.html',
  styleUrls: ['./product-list-grid-item.component.scss']
})
export class ProductListGridItemComponent implements OnInit {

  constructor() { }

  @Input() product!: Product;
  @Input() searchCriteria!: ProductSearchCriteria;

  ngOnInit(): void {
  }

}
