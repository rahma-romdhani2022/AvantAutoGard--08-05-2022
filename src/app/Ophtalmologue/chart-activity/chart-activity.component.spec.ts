import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartActivityComponent } from './chart-activity.component';

describe('ChartActivityComponent', () => {
  let component: ChartActivityComponent;
  let fixture: ComponentFixture<ChartActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
