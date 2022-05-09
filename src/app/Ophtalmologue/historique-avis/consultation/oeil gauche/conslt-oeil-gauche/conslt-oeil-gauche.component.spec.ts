import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsltOeilGaucheComponent } from './conslt-oeil-gauche.component';

describe('ConsltOeilGaucheComponent', () => {
  let component: ConsltOeilGaucheComponent;
  let fixture: ComponentFixture<ConsltOeilGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsltOeilGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsltOeilGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
