import { Component } from '@angular/core';
import { NvsDynamicFormModule } from '../../../../projects/ng-core/src/lib/nvs-dynamic-form.module';
import { RouterOutlet } from '@angular/router';
import { TextboxField } from '../../../../projects/ng-core/src/public-api';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NvsDynamicFormModule],
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

  onSubmit({ values, valid }: { values: any; valid: boolean }) {
    if (valid) alert(JSON.stringify(values));
    else alert('invalid form');
  }
}
