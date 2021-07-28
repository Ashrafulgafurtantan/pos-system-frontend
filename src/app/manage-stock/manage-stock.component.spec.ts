import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockComponent } from './manage-stock.component';

describe('ManageStockComponent', () => {
  let component: ManageStockComponent;
  let fixture: ComponentFixture<ManageStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
