import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreAvis1Component } from './repondre-avis1.component';

describe('RepondreAvis1Component', () => {
  let component: RepondreAvis1Component;
  let fixture: ComponentFixture<RepondreAvis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreAvis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreAvis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
