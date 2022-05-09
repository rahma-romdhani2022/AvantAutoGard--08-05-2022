import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDrOphtalmologueComponent } from './patients-dr-ophtalmologue.component';

describe('PatientsDrOphtalmologueComponent', () => {
  let component: PatientsDrOphtalmologueComponent;
  let fixture: ComponentFixture<PatientsDrOphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsDrOphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDrOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
