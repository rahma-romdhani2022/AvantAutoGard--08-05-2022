import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersConsultationsComponent } from './dossiers-consultations.component';

describe('DossiersConsultationsComponent', () => {
  let component: DossiersConsultationsComponent;
  let fixture: ComponentFixture<DossiersConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
