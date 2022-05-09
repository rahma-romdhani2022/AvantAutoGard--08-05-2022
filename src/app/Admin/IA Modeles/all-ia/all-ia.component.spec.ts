import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIAComponent } from './all-ia.component';

describe('AllIAComponent', () => {
  let component: AllIAComponent;
  let fixture: ComponentFixture<AllIAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
