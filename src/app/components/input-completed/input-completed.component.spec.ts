import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompletedComponent } from './input-completed.component';

describe('InputCompletedComponent', () => {
  let component: InputCompletedComponent;
  let fixture: ComponentFixture<InputCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
