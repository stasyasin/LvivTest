import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputDefaultComponent } from './components/input-default/input-default.component';
import { InputFocusedComponent } from './components/input-focused/input-focused.component';
import { InputCompletedComponent } from './components/input-completed/input-completed.component';
import { InputAutoClearComponent } from './components/input-autoclear/input-auto-clear.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { InputDisabledComponent } from './components/input-disabled/input-disabled.component';
import { WelcomePanelComponent } from './components/welcome-panel/welcome-panel.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClearInputButtonComponent } from './components/clear-input-button/clear-input-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    InputDefaultComponent,
    InputFocusedComponent,
    InputCompletedComponent,
    InputAutoClearComponent,
    InputErrorComponent,
    InputDisabledComponent,
    WelcomePanelComponent,
    CalendarComponent,
    ClearInputButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
