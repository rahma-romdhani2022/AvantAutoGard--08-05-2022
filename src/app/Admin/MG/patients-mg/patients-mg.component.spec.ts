import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsMGComponent } from './patients-mg.component';

describe('PatientsMGComponent', () => {
  let component: PatientsMGComponent;
  let fixture: ComponentFixture<PatientsMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
