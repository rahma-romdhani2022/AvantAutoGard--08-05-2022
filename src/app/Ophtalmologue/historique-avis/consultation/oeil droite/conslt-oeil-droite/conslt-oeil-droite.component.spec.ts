import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsltOeilDroiteComponent } from './conslt-oeil-droite.component';

describe('ConsltOeilDroiteComponent', () => {
  let component: ConsltOeilDroiteComponent;
  let fixture: ComponentFixture<ConsltOeilDroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsltOeilDroiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsltOeilDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
