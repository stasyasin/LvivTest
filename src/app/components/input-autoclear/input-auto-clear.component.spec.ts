import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAutoClearComponent } from './input-auto-clear.component';

describe('InputAutoclearComponent', () => {
  let component: InputAutoClearComponent;
  let fixture: ComponentFixture<InputAutoClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAutoClearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAutoClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
