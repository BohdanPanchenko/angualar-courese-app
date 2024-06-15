//  constructor(private httpClient: HttpClient) {}

//   getCharacters(searchTerm?: string): Observable<any> {
//     this.charactersLoader$.next(true);
//     const queryParams: string = searchTerm ? `?search=${searchTerm}` : "";
//     return this.httpClient
//       .get<any>(`https://swapi.dev/api/people/${queryParams}`)
//       .pipe(finalize(() => this.charactersLoader$.next(false)))
//       .pipe(map((response) => response.results));
//   }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize, map } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses$ = Observable;
  constructor(private httpClient: HttpClient) {
    const queryParams = '';
    this.httpClient
      .get<any>(`http://localhost:4000/courses/all${queryParams}`)
      .pipe(map((response) => response.result))
      .subscribe((course) => {
        this.courses$ = course;
        // console.log(course);
      });
  }
  //   courses$ = Observable<Course[]>;

  //     getCourses(searchTerm?: string): Observable<Course> {
  //     const queryParams: string = searchTerm ? `?search=${searchTerm}` : "";
  //     return this.httpClient
  //       .get<any>(`https://swapi.dev/api/people/${queryParams}`)
  //       .pipe(finalize(() => this.charactersLoader$.next(false)))
  //       .pipe(map((response) => response.results));
  //   }
}
