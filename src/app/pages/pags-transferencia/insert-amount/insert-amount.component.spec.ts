import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAmountComponent } from './insert-amount.component';

describe('InsertAmountComponent', () => {
  let component: InsertAmountComponent;
  let fixture: ComponentFixture<InsertAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
