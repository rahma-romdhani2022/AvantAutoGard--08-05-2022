import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAvisComponent } from './ajout-avis.component';

describe('AjoutAvisComponent', () => {
  let component: AjoutAvisComponent;
  let fixture: ComponentFixture<AjoutAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
