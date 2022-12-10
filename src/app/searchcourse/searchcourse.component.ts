import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.css']
})
export class SearchcourseComponent {
  courseTitle=""
  searchCourse: any;

  constructor(private api:ApiService){}
  readValues=()=>{
    let data={"courseTitle":this.courseTitle}
    console.log(data)
    this.api.searchCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid Course title")
        } else {
          this.searchCourse=response
          
        }
      }
    )

  }

}
