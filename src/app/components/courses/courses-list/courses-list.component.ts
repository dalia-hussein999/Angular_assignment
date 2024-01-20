import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interface/course';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] =[];
  displayedCourses: any[] = [];
  
  pageSize = 4;
  currentPage = 1;
  searchQuary : string ='';
  showResults: boolean = false;
  courseType: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCoursesData().subscribe(
      (data: any) => {
        this.courses = data;
        this.displayedCourses = this.courses; 
      },
      (error) => {
        console.error('Error fetching courses data:', error);
      }
    );
  }
  onGoButtonClick() {
    this.showResults = true; 
    this.dataService.getFilteredData(this.searchQuary).subscribe(filteredData => {
      this.displayedCourses = filteredData;  
    });
  }
  
}
