import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCardExclusionComponent } from './confirm-card-exclusion.component';

describe('ConfirmCardExclusionComponent', () => {
  let component: ConfirmCardExclusionComponent;
  let fixture: ComponentFixture<ConfirmCardExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmCardExclusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCardExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
