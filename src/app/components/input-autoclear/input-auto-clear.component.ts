import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-auto-clear',
  templateUrl: './input-auto-clear.component.html',
  styleUrls: ['./input-auto-clear.component.scss']
})
export class InputAutoClearComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
