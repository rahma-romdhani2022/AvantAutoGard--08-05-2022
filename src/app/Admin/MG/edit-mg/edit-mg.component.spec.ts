import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMGComponent } from './edit-mg.component';

describe('EditMGComponent', () => {
  let component: EditMGComponent;
  let fixture: ComponentFixture<EditMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
