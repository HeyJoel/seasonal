import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchCriteriaComponent } from './product-search-criteria.component';

describe('ProductSearchCriteriaComponent', () => {
  let component: ProductSearchCriteriaComponent;
  let fixture: ComponentFixture<ProductSearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
