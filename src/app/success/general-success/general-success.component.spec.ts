import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSuccessComponent } from './general-success.component';

describe('GeneralSuccessComponent', () => {
  let component: GeneralSuccessComponent;
  let fixture: ComponentFixture<GeneralSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
