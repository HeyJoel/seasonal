import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Observable<Category[]>;

  constructor(
    private http: HttpClient
  ) {
    this.categories = this.getAllInternal();
   }

  getAll() {
    return this.categories;
  }

  private getAllInternal() {
    return this.http
      .get<Category[]>('/assets/data/categories.json')
      .pipe(shareReplay(1));
  }
}
