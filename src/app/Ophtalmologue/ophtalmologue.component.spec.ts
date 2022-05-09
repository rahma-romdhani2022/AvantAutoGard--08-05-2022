import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OphtalmologueComponent } from './ophtalmologue.component';

describe('OphtalmologueComponent', () => {
  let component: OphtalmologueComponent;
  let fixture: ComponentFixture<OphtalmologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OphtalmologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
