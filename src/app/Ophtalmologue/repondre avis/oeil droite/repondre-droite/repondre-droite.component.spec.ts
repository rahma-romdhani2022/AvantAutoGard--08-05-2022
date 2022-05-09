import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreDroiteComponent } from './repondre-droite.component';

describe('RepondreDroiteComponent', () => {
  let component: RepondreDroiteComponent;
  let fixture: ComponentFixture<RepondreDroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreDroiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
