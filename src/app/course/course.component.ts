import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular//common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course: any;

  public constructor(private location: Location, private http: HttpClient) {
      this.course = {
          'name': '',
          'code': '',
          'start': '',
          'end': '',
          'grade': '',
      };
  }

  public ngOnInit() { }

  public save() {
      if (this.course.name) {
          console.log(this.course)
          this.http.post('http://localhost:3000/courses', this.course)
              .subscribe(result => {
                  this.location.back();
              }, err => {
                  console.log(err);
              });
      }
  }

}

