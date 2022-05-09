import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreAdminComponent } from './registre-admin.component';

describe('RegistreAdminComponent', () => {
  let component: RegistreAdminComponent;
  let fixture: ComponentFixture<RegistreAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
