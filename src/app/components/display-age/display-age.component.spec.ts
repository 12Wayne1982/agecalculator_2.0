import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAgeComponent } from './display-age.component';

describe('DisplayAgeComponent', () => {
  let component: DisplayAgeComponent;
  let fixture: ComponentFixture<DisplayAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
