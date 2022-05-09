import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeteInstallationComponent } from './tete-installation.component';

describe('TeteInstallationComponent', () => {
  let component: TeteInstallationComponent;
  let fixture: ComponentFixture<TeteInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeteInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeteInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
