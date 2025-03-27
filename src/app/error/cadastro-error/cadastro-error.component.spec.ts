import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroErrorComponent } from './cadastro-error.component';

describe('CadastroErrorComponent', () => {
  let component: CadastroErrorComponent;
  let fixture: ComponentFixture<CadastroErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
