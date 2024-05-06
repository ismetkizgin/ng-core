import {
  DropdownField,
  TextboxField,
} from '../../../../projects/ng-dynamic-form/src/public-api';

import { Component } from '@angular/core';
import { NgDynamicFormModule } from '../../../../projects/ng-dynamic-form/src/lib/ng-dynamic-form.module';
import { RouterOutlet } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NgDynamicFormModule],
})
export class AppComponent {
  title = 'simple-example';

  fields = [
    new TextboxField({
      label: 'First Name',
      key: 'firstName',
      placeholder: 'test',
      validators: [Validators.required],
      screenSize: {
        desktop: 6,
        mobile: 12,
      },
    }),
    new TextboxField({
      label: 'Last Name',
      key: 'lastName',
      screenSize: {
        desktop: 6,
        mobile: 12,
      },
    }),
    new TextboxField({
      label: 'E-mail Address',
      key: 'emailAddress',
      screenSize: 12,
    }),
  ];

  submitButtonOpts = {
    isFullWidth: false,
    visible: true,
  };

  onSubmit(value: any) {
    alert(JSON.stringify(value));
  }
}