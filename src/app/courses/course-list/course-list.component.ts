import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular: forms",
        imageUrl: "",
        price: 199.99,
        code: "XPS-879",
        duration: 120,
        rating: 4.5,
        releaseDate: "September, 17, 1099",
      },
      {
        id: 2,
        name: "Java avançado",
        imageUrl: "",
        price: 399,
        code: "XTZ-660",
        duration: 720,
        rating: 3.9,
        releaseDate: "November, 20, 1992",
      }
    ]
  }

}
