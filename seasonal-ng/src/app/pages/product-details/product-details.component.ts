import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  month: number = new Date().getMonth() + 1;
  isBest: boolean = false;
  hasShortSeason: boolean = false;
  isStartOfSeason: boolean = false;
  isEndOfSeason: boolean = false;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.product = data['product'];
      
      this.isBest =  this.product.isBest(this.month);
      this.hasShortSeason =  this.product.hasShortSeason();
      this.isStartOfSeason =  this.product.isStartOfSeason(this.month);
      this.isEndOfSeason =  this.product.isEndOfSeason(this.month);
    })
  }
}
