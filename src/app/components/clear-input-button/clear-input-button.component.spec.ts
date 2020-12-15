import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearInputButtonComponent } from './clear-input-button.component';

describe('ClearInputButtonComponent', () => {
  let component: ClearInputButtonComponent;
  let fixture: ComponentFixture<ClearInputButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearInputButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
