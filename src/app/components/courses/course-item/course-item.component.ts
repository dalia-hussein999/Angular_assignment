import { Component , Input} from '@angular/core';
import { Course } from '../../../interface/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
@Input() course !: Course;

constructor( private router: Router){}
sendNameToDetails(courseName: string) {
  this.router.navigate(['details', courseName]);
}
}
