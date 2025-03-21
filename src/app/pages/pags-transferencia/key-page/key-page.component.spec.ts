import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPageComponent } from './key-page.component';

describe('KeyPageComponent', () => {
  let component: KeyPageComponent;
  let fixture: ComponentFixture<KeyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
