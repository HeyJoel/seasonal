import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<Product> {

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { 
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    let id = route.paramMap.get('id');
    if (!id) return EMPTY;

    return this.productsService.getById(id).pipe(
      mergeMap(product => {
        if (product) return of(product);
        
        this.router.navigate(['/404'], { skipLocationChange: true });
        return EMPTY;
      }));
  }

}
