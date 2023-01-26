import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSrvCmptComponent } from './user-srv-cmpt.component';

describe('UserSrvCmptComponent', () => {
  let component: UserSrvCmptComponent;
  let fixture: ComponentFixture<UserSrvCmptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSrvCmptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSrvCmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
