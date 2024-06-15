import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Course } from './features/shared/interfaces/course.interface';
import { courses } from './features/shared/mocks/mocks';

import { NavigationDataService } from './features/shared/services/navigation-data-service.service';
import { NavigationService } from './features/shared/services/navigation-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoursesService } from './features/shared/services/courses.service';

interface Product {
  id: string;
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  providers: [NavigationDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // products$: Observable<Product[]>;
  // constructor(
  //   private navigationService: NavigationService,
  //   private httpClient: HttpClient
  // ) {
  //   this.products$ = this.httpClient.get<Product[]>(
  //     'http://localhost:4000/courses/all'
  //   );
  //   this.products$.subscribe(console.log);
  // }

  constructor(
    private navigationService: NavigationService,
    private coursesService: CoursesService
  ) {
    console.log(this.coursesService.courses$);
  }
  isLoggedIn: boolean = false;
  navigateToAuth(path: string): void {
    this.navigationService.navigateTo(path);
  }
}
