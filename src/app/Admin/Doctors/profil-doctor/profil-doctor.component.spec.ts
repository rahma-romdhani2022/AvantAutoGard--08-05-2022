import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDoctorComponent } from './profil-doctor.component';

describe('ProfilDoctorComponent', () => {
  let component: ProfilDoctorComponent;
  let fixture: ComponentFixture<ProfilDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
