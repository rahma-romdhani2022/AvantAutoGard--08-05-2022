import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatModeleComponent } from './stat-modele.component';

describe('StatModeleComponent', () => {
  let component: StatModeleComponent;
  let fixture: ComponentFixture<StatModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
