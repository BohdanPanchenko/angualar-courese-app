import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  imports: [SharedModule],
  exports: [AuthComponent, LoginComponent, RegistrationComponent],
})
export class AuthModule {
  credentials = {
    email: 'admin@email.com',
    password: 'admin123',
  };
}
