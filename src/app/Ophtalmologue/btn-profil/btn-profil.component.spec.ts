import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnProfilComponent } from './btn-profil.component';

describe('BtnProfilComponent', () => {
  let component: BtnProfilComponent;
  let fixture: ComponentFixture<BtnProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
