import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUploadImageComponent } from './test-upload-image.component';

describe('TestUploadImageComponent', () => {
  let component: TestUploadImageComponent;
  let fixture: ComponentFixture<TestUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
