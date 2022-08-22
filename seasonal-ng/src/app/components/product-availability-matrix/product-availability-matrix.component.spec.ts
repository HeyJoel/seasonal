import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAvailabilityMatrixComponent } from './product-availability-matrix.component';

describe('ProductAvailabilityMatrixComponent', () => {
  let component: ProductAvailabilityMatrixComponent;
  let fixture: ComponentFixture<ProductAvailabilityMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAvailabilityMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAvailabilityMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
