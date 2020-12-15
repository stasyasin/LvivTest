import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-clear-input-button',
  templateUrl: './clear-input-button.component.html',
  styleUrls: ['./clear-input-button.component.scss']
})
export class ClearInputButtonComponent {
  @Input() control: AbstractControl;
  @Input() defaultValue?: any = null;
  @Output() cleared = new EventEmitter();

  clear() {
    this.control.setValue(this.defaultValue);
    this.cleared.emit();
  }
}
