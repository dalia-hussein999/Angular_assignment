import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
constructor(private dataServive : DataService){}

ngOnInit(){
  this.dataServive.getCoursesData().subscribe((data: any) => console.log(data))
}
}
