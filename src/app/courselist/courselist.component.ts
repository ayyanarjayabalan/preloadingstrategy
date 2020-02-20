import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data: any) => {
      console.log();

    });

    // console.log(this.activatedRoute.snapshot.data);
    // this.courses = this.activatedRoute.snapshot.data.courses;

    // timer(10000).pipe(map(() => {
    //   return this.getCourses();
    // }))
    //   .subscribe((data: any) => {
    //     this.courses = data;
    //   });

    // this.courses = this.getCourses();
  }

  getCourses(): any {
    return [
      {
        id: 1,
        name: 'Angular'
      },
      {
        id: 2,
        name: '.Net'
      },
      {
        id: 3,
        name: 'React'
      }
    ];
  }



}
