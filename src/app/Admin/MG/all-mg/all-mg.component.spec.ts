import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMGComponent } from './all-mg.component';

describe('AllMGComponent', () => {
  let component: AllMGComponent;
  let fixture: ComponentFixture<AllMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
