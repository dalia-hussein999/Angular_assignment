import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  courseName: string | null = null; 
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  courseType: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.courseName = params.get('courseName');
      this.updateBreadcrumbModel();
    });

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  updateBreadcrumbModel() {
    this.items = [
      { label: 'All Courses', routerLink: '/home' },
      { label: this.courseName ?? "" }
    ];
  }
}

