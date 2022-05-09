import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDroiteComponent } from './ajout-droite.component';

describe('AjoutDroiteComponent', () => {
  let component: AjoutDroiteComponent;
  let fixture: ComponentFixture<AjoutDroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutDroiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
