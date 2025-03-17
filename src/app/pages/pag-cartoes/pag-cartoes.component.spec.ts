import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCartoesComponent } from './pag-cartoes.component';

describe('PagCartoesComponent', () => {
  let component: PagCartoesComponent;
  let fixture: ComponentFixture<PagCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagCartoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
