import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OURDOCTORSComponent } from './our-doctors.component';

describe('OURDOCTORSComponent', () => {
  let component: OURDOCTORSComponent;
  let fixture: ComponentFixture<OURDOCTORSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OURDOCTORSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OURDOCTORSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
