import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Policy1Component } from './policy1.component';

describe('Policy1Component', () => {
  let component: Policy1Component;
  let fixture: ComponentFixture<Policy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Policy1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Policy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
