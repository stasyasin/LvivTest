import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-completed',
  templateUrl: './input-completed.component.html',
  styleUrls: ['./input-completed.component.scss']
})
export class InputCompletedComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
