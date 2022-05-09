import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreGaucheComponent } from './repondre-gauche.component';

describe('RepondreGaucheComponent', () => {
  let component: RepondreGaucheComponent;
  let fixture: ComponentFixture<RepondreGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
