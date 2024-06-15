import { NgModule } from '@angular/core';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationService } from '../shared/services/navigation-service.service';

@NgModule({
  declarations: [CourseHeaderComponent, CoursesListComponent, CoursesComponent],
  imports: [SharedModule],
  exports: [CourseHeaderComponent, CoursesListComponent, CoursesComponent],
  providers: [NavigationService],
})
export class CoursesModule {}
