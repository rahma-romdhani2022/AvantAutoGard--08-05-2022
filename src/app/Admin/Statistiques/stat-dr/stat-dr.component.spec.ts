import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDrComponent } from './stat-dr.component';

describe('StatDrComponent', () => {
  let component: StatDrComponent;
  let fixture: ComponentFixture<StatDrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
