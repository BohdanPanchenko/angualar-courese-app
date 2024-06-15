import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { CourseInfoModule } from './features/course-info/course-info.module';
import { CoursesModule } from './features/courses/courses.module';
import { ButtonComponent } from './features/shared/components/button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    CourseInfoModule,
    CoursesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
