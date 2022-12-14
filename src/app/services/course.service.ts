import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  loadCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>('/api/courses')
      .pipe(map((data) => data['payload']));
  }
}
