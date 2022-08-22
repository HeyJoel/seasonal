import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailResolverService } from './data/resolvers/product-detail-resolver.service';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { 
    path: 'products/:id', 
    component: ProductDetailsComponent, 
    resolve: {
      product: ProductDetailResolverService
    } },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
