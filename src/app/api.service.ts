import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  fetchCourses=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addCourse=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataTosend)
  }
  searchCourse=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataTosend)
  }
  deleteCourse=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
}
