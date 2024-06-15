import { Component } from '@angular/core';
import { UserAuthForm } from '../../shared/interfaces/user-auth-form.interface';
@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginFields: UserAuthForm[] = [
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
