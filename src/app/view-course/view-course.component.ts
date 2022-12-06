import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  data:any=[
    {"id":1,"courseTitle":"Java","description":"Instructor: Sarang","venue":"Ernakulam","duration":"3 month","date":"22/05/2022"},{"id":2,"courseTitle":"Java","description":"Instructor: Sarang","venue":"Ernakulam","duration":"3 month","date":"22/05/2022"},{"id":3,"courseTitle":"Java","description":"Instructor: Sarang","venue":"Ernakulam","duration":"3 month","date":"22/05/2022"},{"id":52,"courseTitle":"python","description":"Instructor:Arun","venue":"kannur","duration":"1 month","date":"22//2022"}

  ]

}
