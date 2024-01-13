import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interface/course';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
  
})
export class CoursesListComponent implements OnInit {
  courses!: Course[];
  displayedCourses: any[] = [];
  searchText: any = "";
  pageSize = 4;
  currentPage = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCoursesData().subscribe(
      (data: any) => {
        this.courses = data;
        this.displayedCourses = this.courses; // Set displayedCourses after data is fetched
      },
      error => {
        console.error('Error fetching courses data:', error);
      }
    );
  }
  

  
}


