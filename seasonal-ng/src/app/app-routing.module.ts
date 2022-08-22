import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetailResolverService } from './pages/product-details/product-detail-resolver.service';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { 
    path: 'products/:id', 
    component: ProductDetailsComponent, 
    resolve: {
      product: ProductDetailResolverService
    } },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
