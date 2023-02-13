import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMedicalComponent } from './best-medical.component';

describe('BestMedicalComponent', () => {
  let component: BestMedicalComponent;
  let fixture: ComponentFixture<BestMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
