import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPatientComponent } from './infos-patient.component';

describe('InfosPatientComponent', () => {
  let component: InfosPatientComponent;
  let fixture: ComponentFixture<InfosPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
