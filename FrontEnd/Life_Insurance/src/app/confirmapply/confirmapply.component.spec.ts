import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmapplyComponent } from './confirmapply.component';

describe('ConfirmapplyComponent', () => {
  let component: ConfirmapplyComponent;
  let fixture: ComponentFixture<ConfirmapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
