import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PACKAGESComponent } from './packages.component';

describe('PACKAGESComponent', () => {
  let component: PACKAGESComponent;
  let fixture: ComponentFixture<PACKAGESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PACKAGESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PACKAGESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
