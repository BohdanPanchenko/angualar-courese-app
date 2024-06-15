import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationDataService } from '../shared/services/navigation-data-service.service';

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [SharedModule],
  exports: [CourseInfoComponent],
})
export class CourseInfoModule {}
