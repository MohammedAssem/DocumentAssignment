import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APPOINTMENTComponent } from './appointment.component';

describe('APPOINTMENTComponent', () => {
  let component: APPOINTMENTComponent;
  let fixture: ComponentFixture<APPOINTMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APPOINTMENTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APPOINTMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
