import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilOphtalmologueComponent } from './accueil-ophtalmologue.component';

describe('AccueilOphtalmologueComponent', () => {
  let component: AccueilOphtalmologueComponent;
  let fixture: ComponentFixture<AccueilOphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilOphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
