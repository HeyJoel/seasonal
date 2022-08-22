import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data/models/product';
import { SeasonalStatus } from '../data/models/seasonal-status';

@Component({
  selector: 'app-product-availability-matrix',
  templateUrl: './product-availability-matrix.component.html',
  styleUrls: ['./product-availability-matrix.component.scss']
})
export class ProductAvailabilityMatrixComponent implements OnInit {

  months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  SeasonalStatusEnum = SeasonalStatus;

  constructor() { }

  @Input() product!: Product;
  @Input() selectedMonth!: number;

  ngOnInit(): void {
  }

  getSeasonalStatusDescription(month: number) {
    switch (this.product.getSeasonalStatus(month)) {
      case SeasonalStatus.Available:
        return 'The item is usually available from a sustainable source';
      case SeasonalStatus.Best:
        return "The item is available and usually at it's best during this time.";
      case SeasonalStatus.NotAvailable:
        return 'The item is not usually available from a sustainable source.';
    }
  }
}
