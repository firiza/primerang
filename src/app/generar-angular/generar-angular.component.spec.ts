import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarAngularComponent } from './generar-angular.component';

describe('GenerarAngularComponent', () => {
  let component: GenerarAngularComponent;
  let fixture: ComponentFixture<GenerarAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
