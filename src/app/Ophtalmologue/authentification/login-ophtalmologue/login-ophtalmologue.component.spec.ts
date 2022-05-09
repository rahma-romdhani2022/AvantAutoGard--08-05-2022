import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOphtalmologueComponent } from './login-ophtalmologue.component';

describe('LoginOphtalmologueComponent', () => {
  let component: LoginOphtalmologueComponent;
  let fixture: ComponentFixture<LoginOphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
