import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFaturaComponent } from './pag-fatura.component';

describe('PagFaturaComponent', () => {
  let component: PagFaturaComponent;
  let fixture: ComponentFixture<PagFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagFaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
