import { Component } from '@angular/core';
import { UserAuthForm } from '../../shared/interfaces/user-auth-form.interface';
import { UserAuthFormComponent } from '../../shared/components/user-auth-form/user-auth-form.component';

@Component({
  selector: 'app-registration',

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationFields: UserAuthForm[] = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Input text',
      required: true,
      value: '',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Input text',
      required: true,
      value: '',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Input text',
      required: true,
      value: '',
    },
  ];
}
