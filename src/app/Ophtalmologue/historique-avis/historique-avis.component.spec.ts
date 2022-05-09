import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAvisComponent } from './historique-avis.component';

describe('HistoriqueAvisComponent', () => {
  let component: HistoriqueAvisComponent;
  let fixture: ComponentFixture<HistoriqueAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
