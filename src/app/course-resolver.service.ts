import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { timer, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Resolver called !!!');
    const obs = timer(3000).pipe(map(() => {
      return this.getCourses();
    }));

    // return of(this.getCourses()).pipe(delay(3000));
    return obs;
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

  constructor() { }
}
