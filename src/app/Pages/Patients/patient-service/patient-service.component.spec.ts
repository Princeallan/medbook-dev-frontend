import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientServiceComponent } from './patient-service.component';

describe('PatientServiceComponent', () => {
  let component: PatientServiceComponent;
  let fixture: ComponentFixture<PatientServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientServiceComponent]
    });
    fixture = TestBed.createComponent(PatientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
