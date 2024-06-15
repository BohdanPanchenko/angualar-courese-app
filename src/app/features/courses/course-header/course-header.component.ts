import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation-service.service';

@Component({
  selector: 'app-course-header',

  templateUrl: './course-header.component.html',
  styleUrl: './course-header.component.scss',
})
export class CourseHeaderComponent {
  constructor(private navigationService: NavigationService) {}
}
