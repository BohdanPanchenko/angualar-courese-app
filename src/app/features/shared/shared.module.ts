import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { InfoComponent } from './components/info/info.component';
import { UserAuthFormComponent } from './components/user-auth-form/user-auth-form.component';
import { DurationPipe } from './pipes/duration.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { DynamicValidatorDirective } from './directives/dynamicvalidator.directive';
import { EmailValidatorDirective } from './directives/email.directive';
import { UserNameValidatorDirective } from './directives/name.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../../app-routing.module';
import { NavigationDataService } from './services/navigation-data-service.service';
import { NavigationService } from './services/navigation-service.service';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseFormComponent,
    HeaderComponent,
    SearchComponent,
    InfoComponent,
    UserAuthFormComponent,
    DurationPipe,
    CustomDatePipe,
    DynamicValidatorDirective,
    EmailValidatorDirective,
    UserNameValidatorDirective,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    CourseCardComponent,
    CourseFormComponent,
    HeaderComponent,
    SearchComponent,
    InfoComponent,
    UserAuthFormComponent,
    DurationPipe,
    CustomDatePipe,
    DynamicValidatorDirective,
    EmailValidatorDirective,
    UserNameValidatorDirective,
    FormsModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [NavigationService, CoursesService],
})
export class SharedModule {}
