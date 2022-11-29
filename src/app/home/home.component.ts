import { Component, OnInit } from '@angular/core';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { interval, noop, Observable, of, throwError, timer } from 'rxjs';
import {
  catchError,
  delay,
  delayWhen,
  filter,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CourseService } from '../services/course.service';
import { HomeViewComponent } from './home-view/home-view.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    HomeViewComponent,
    MatTabsModule,
  ],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    const courses$: Observable<Course[]> = this.courseService.loadCourses();

    this.beginnerCourses$ = courses$.pipe(
      map((data) => data.filter((course) => course.category == 'BEGINNER'))
    );

    this.advancedCourses$ = courses$.pipe(
      map((data) => data.filter((course) => course.category == 'ADVANCED'))
    );
  }
}
