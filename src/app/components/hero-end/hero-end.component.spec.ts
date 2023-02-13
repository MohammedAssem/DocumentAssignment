import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEndComponent } from './hero-end.component';

describe('HeroEndComponent', () => {
  let component: HeroEndComponent;
  let fixture: ComponentFixture<HeroEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
