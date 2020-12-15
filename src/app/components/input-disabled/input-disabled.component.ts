import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-disabled',
  templateUrl: './input-disabled.component.html',
  styleUrls: ['./input-disabled.component.scss']
})
export class InputDisabledComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
