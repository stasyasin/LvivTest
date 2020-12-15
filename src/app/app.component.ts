import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const PERIOD = '^\\d?[\\daAsStT]?\\d{4}$';

export class FormModel {
  default: string;
  focused: string;
  completed: string;
  autoClear: string;
  error: string;
  disabled: string;
}

const defaultForm: FormModel = {
  default: '',
  focused: 'Text that User is entering',
  completed: 'Text entered, the input field is completed',
  autoClear: 'Text entered, the input field is complet',
  error: 'Text that User is entering',
  disabled: '',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      default: [''],
      focused: [''],
      completed: [''],
      autoClear: [''],
      error: ['', Validators.pattern(PERIOD)],
      disabled: [''],
    });
  }

  ngOnInit(): void {
    this.form.patchValue(defaultForm);
    // this.form.controls['error'].setErrors({incorrect: true});
    // this.form.controls.error.se = true;
  }
}
