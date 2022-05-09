import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAppComponent } from './stat-app.component';

describe('StatAppComponent', () => {
  let component: StatAppComponent;
  let fixture: ComponentFixture<StatAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
