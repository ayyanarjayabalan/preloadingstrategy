import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

// install i network-information-types - for connection property of navigator

@Injectable({
  providedIn: 'root'
})
export class NetworkawarepreLoadingstrategyService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const network = navigator.connection;
    if (network.saveData) {
      return of(null);
    } else {

      console.log(network.effectiveType);

      const effType = network.effectiveType;
      // effType = '2g';

      const slowDataConnection = ['slow-2g', '2g', '3g'];

      console.log('Network effective type', effType);

      if (slowDataConnection.includes(effType)) {
        return of(null);
      } else {
        return fn();
      }
    }
    return of(null);
  }

  constructor() { }
}
