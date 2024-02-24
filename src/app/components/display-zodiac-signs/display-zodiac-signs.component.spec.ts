import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayZodiacSignsComponent } from './display-zodiac-signs.component';

describe('DisplayZodiacSignsComponent', () => {
  let component: DisplayZodiacSignsComponent;
  let fixture: ComponentFixture<DisplayZodiacSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayZodiacSignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayZodiacSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
