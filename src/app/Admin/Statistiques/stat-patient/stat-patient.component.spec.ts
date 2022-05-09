import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPatientComponent } from './stat-patient.component';

describe('StatPatientComponent', () => {
  let component: StatPatientComponent;
  let fixture: ComponentFixture<StatPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
