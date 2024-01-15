import { Component , Input} from '@angular/core';
import { Course } from '../../../interface/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
@Input() course !: Course;
}
