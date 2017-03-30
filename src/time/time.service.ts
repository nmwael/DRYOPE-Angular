import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TimeJson} from './time.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';

@Injectable()
export class TimeService {

  // See http://davidayala.eu/current-time/
  private apiEndpoint = 'https://script.google.com' +
    '/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';

  constructor(private _http: Http) {
  }

  getTime(): Observable<TimeJson[]> {
    return Observable
      .interval(3000)
      .flatMap(() => {
        return this.getJsonTime();
      });
  }

  getJsonTime(): Observable<TimeJson[]> {
    return this._http
      .get(this.apiEndpoint)
      .map(results => results.json());
  }
}
