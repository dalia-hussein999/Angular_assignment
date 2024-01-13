import { Component } from '@angular/core';
import { Course } from 'src/app/interface/course';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  searchInput = '';
  searchResults: Course[] = [];

  constructor(private dataService: DataService) {}

  searchCourses() {
    this.dataService.getCoursesData().subscribe(courses => {
      this.searchResults = courses.filter(course =>
        course.courseName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        course.author.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(this.searchInput.toLowerCase()))
      );
    });
  }
}
