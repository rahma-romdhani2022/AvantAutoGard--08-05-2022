import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartActivityDrOphtalmologueComponent } from './chart-activity-dr-ophtalmologue.component';

describe('ChartActivityDrOphtalmologueComponent', () => {
  let component: ChartActivityDrOphtalmologueComponent;
  let fixture: ComponentFixture<ChartActivityDrOphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartActivityDrOphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartActivityDrOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
