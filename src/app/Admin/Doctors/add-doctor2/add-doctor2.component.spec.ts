import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctor2Component } from './add-doctor2.component';

describe('AddDoctor2Component', () => {
  let component: AddDoctor2Component;
  let fixture: ComponentFixture<AddDoctor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
