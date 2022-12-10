import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';

const myRoute : Routes=[
  {
    path:"add",
    component:AddCourseComponent
  },
  {
    path:"view",
    component:ViewCourseComponent
  },
  {
    path:"search",
    component:SearchcourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    NavbarComponent,
    ViewCourseComponent,
    SearchcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
