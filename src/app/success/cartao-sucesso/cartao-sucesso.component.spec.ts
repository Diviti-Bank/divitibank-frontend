import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoSucessoComponent } from './cartao-sucesso.component';

describe('CartaoSucessoComponent', () => {
  let component: CartaoSucessoComponent;
  let fixture: ComponentFixture<CartaoSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoSucessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
