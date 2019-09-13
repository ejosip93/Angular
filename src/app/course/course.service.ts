import { Injectable } from '@angular/core';
import { courses } from '../courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses() {
    return courses;
  }
  constructor() { }
}
