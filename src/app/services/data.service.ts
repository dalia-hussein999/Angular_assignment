import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interface/course';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = './assets/data.json';
  constructor(private http: HttpClient) { }

  getCoursesData(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getFilteredData(searchQuary: string): Observable<Course[]> {
    return this.getCoursesData().pipe(
      map(courses => {
        if (!searchQuary) {
          return courses; // Return all courses if searchTerm is empty
        }

        searchQuary = searchQuary.toLowerCase(); // Convert to lowercase for case-insensitive search

        return courses.filter(course =>
          course.courseName.toLowerCase().includes(searchQuary) ||
          course.author.toLowerCase().includes(searchQuary) ||
          course.tags.some(tag => tag.toLowerCase().includes(searchQuary))
        );
      })
    );
  }
}

