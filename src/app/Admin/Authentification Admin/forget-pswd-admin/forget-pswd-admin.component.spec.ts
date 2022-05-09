import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPswdAdminComponent } from './forget-pswd-admin.component';

describe('ForgetPswdAdminComponent', () => {
  let component: ForgetPswdAdminComponent;
  let fixture: ComponentFixture<ForgetPswdAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPswdAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPswdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
