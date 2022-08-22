import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListGridComponent } from './product-list-grid/product-list-grid.component';
import { ProductListGridItemComponent } from './product-list-grid-item/product-list-grid-item.component';
import { ProductAvailabilityMatrixComponent } from './product-availability-matrix/product-availability-matrix.component';
import { ProductSearchCriteriaComponent } from './product-search-criteria/product-search-criteria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListGridComponent,
    ProductListGridItemComponent,
    ProductAvailabilityMatrixComponent,
    ProductSearchCriteriaComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
