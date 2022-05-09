import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGaucheComponent } from './ajout-gauche.component';

describe('AjoutGaucheComponent', () => {
  let component: AjoutGaucheComponent;
  let fixture: ComponentFixture<AjoutGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
