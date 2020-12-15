import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFocusedComponent } from './input-focused.component';

describe('InputFocusedComponent', () => {
  let component: InputFocusedComponent;
  let fixture: ComponentFixture<InputFocusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFocusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFocusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
