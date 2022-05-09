import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIAModelComponent } from './add-ia-model.component';

describe('AddIAModelComponent', () => {
  let component: AddIAModelComponent;
  let fixture: ComponentFixture<AddIAModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIAModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIAModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
