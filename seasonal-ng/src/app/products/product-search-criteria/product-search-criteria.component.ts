import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductSearchCriteria } from '../data/models/product-search-criteria';

@Component({
  selector: 'app-product-search-criteria',
  templateUrl: './product-search-criteria.component.html',
  styleUrls: ['./product-search-criteria.component.scss']
})
export class ProductSearchCriteriaComponent implements OnInit {
  
  months: Array<string> = ["Show All", "January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngOnInit(): void {
  }

  @Input() searchCriteria!: ProductSearchCriteria;
  @Output() criteriaChange = new EventEmitter;
}
