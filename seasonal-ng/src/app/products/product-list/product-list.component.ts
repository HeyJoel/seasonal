import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Category } from '../data/models/category';
import { Product } from '../data/models/product';
import { ProductSearchCriteria } from '../data/models/product-search-criteria';
import { CategoriesService } from '../data/services/categories.service';
import { ProductsService } from '../data/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  categories!: Observable<Category[]>;
  products!: Observable<Product[]>;
  searchCriteria: ProductSearchCriteria = new ProductSearchCriteria();
  searchCriteriaSubject: BehaviorSubject<ProductSearchCriteria> = new BehaviorSubject<ProductSearchCriteria>(this.searchCriteria);

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAll();
    this.products = this.getProducts();
  }

  getProducts() {
    let productsObservable = this.productService.getAll();

    return combineLatest({
      'products': productsObservable,
      'criteria': this.searchCriteriaSubject
    })
      .pipe(map(r => r.products
        .filter(p => {
          return r.criteria.month < 1 || p.isAvailable(r.criteria.month)
        })
        .sort((p1, p2) => r.criteria.ordering == "relevance" ? p1.compareByRelevance(p2, r.criteria.month) : p1.compareByName(p2))
      ));
  }

  onCriteriaChange() {
    this.searchCriteriaSubject.next(this.searchCriteria)
  }
}
