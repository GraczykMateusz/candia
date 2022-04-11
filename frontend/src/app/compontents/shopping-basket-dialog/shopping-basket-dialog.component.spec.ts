import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBasketDialogComponent } from './shopping-basket-dialog.component';

describe('ShoppingBasketDialogComponent', () => {
  let component: ShoppingBasketDialogComponent;
  let fixture: ComponentFixture<ShoppingBasketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBasketDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
