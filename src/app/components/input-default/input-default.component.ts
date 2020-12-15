import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss']
})
export class InputDefaultComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
