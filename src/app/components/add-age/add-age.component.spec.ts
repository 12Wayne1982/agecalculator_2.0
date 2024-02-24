import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgeComponent } from './add-age.component';

describe('AddAgeComponent', () => {
  let component: AddAgeComponent;
  let fixture: ComponentFixture<AddAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
