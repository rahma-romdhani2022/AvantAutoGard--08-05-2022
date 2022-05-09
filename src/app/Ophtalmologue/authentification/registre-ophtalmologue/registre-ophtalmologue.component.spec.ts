import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreOphtalmologueComponent } from './registre-ophtalmologue.component';

describe('RegistreOphtalmologueComponent', () => {
  let component: RegistreOphtalmologueComponent;
  let fixture: ComponentFixture<RegistreOphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreOphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
