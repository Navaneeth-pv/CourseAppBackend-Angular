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
  data1: any;

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

  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteCourse(data).subscribe(
      (genarate:any)=>{
        console.log(genarate)
        if (genarate.status=="success") {
          alert("deleted successfully")
          this.data1=[]
          
        }
      }
    )
  }


}
