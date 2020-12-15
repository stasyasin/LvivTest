import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-input-focused',
  templateUrl: './input-focused.component.html',
  styleUrls: ['./input-focused.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFocusedComponent {
  @Input()
  form: FormGroup;
  @ViewChild('focusedInput') focusedInput: MatInput;

  constructor() {
  }

}
