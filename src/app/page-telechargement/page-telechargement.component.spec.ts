import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTelechargementComponent } from './page-telechargement.component';

describe('PageTelechargementComponent', () => {
  let component: PageTelechargementComponent;
  let fixture: ComponentFixture<PageTelechargementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTelechargementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTelechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
