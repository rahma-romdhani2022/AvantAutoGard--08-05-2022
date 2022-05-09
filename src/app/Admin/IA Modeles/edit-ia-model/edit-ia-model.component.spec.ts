import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIaModelComponent } from './edit-ia-model.component';

describe('EditIaModelComponent', () => {
  let component: EditIaModelComponent;
  let fixture: ComponentFixture<EditIaModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIaModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
