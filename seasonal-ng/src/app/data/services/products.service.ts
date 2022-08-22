import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { ProductResponse } from '../models/product-response';
import { Product } from '../models/product';
import { shareReplay, forkJoin } from 'rxjs';
import { Category } from '../models/category';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private categoryService: CategoriesService
  ) {
   }

  getById(productId: string) {
    return this.getAll().pipe(
      map(products => products.find(p => p.productId == productId))
    );
  }

  getAll() {

    var products = this.http.get<ProductResponse[]>(`/assets/data/products.json`);
    var categories = this.categoryService
      .getAll()
      .pipe(
        map(cats => new Map(cats.map(c => [c.categoryId, c])))
      );

    return forkJoin({
      'categories': categories,
      'products': products
    }).pipe(
      map(r => mapProducts(r.products, r.categories)),
      shareReplay(1)
    );

    function mapProducts(products: ProductResponse[], categories: Map<string, Category>) {
      return products.map(p => {

        let category = categories.get(p.categoryId);
        if (category == undefined){
          throw `Unknown category: ${p.categoryId}`;
        }
        return new Product(p, category)
      });
    }
  }
}
