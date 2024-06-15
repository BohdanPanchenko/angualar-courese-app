import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { CourseInfoModule } from './features/course-info/course-info.module';
import { CoursesModule } from './features/courses/courses.module';
import { ButtonComponent } from './features/shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { AuthComponent } from './features/auth/auth.component';
import { UserAuthFormComponent } from './features/shared/components/user-auth-form/user-auth-form.component';
import { CourseInfoComponent } from './features/course-info/course-info.component';
import { CourseFormComponent } from './features/shared/components/course-form/course-form.component';

const routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'auth/login', component: AuthComponent },
  {
    path: 'auth/registration',
    component: AuthComponent,
  },
  {
    path: 'courses/add',
    component: CourseFormComponent,
  },
  {
    path: 'courses/edit/:id',
    component: CourseFormComponent,
  },
  {
    path: 'courses/:id',
    component: CourseInfoComponent,
  },
  {
    path: '**',
    component: CoursesComponent,
  },
  { path: '', component: CoursesComponent },
  //Add page for showing an existing course (/courses/:id route, where id – course id)
  // Add page for editing an existing course (/courses/edit/:id route, where id – course id)
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
