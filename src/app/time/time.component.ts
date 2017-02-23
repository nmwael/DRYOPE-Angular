import {Component, OnInit} from '@angular/core';
import {TimeService} from './time.service';
import {TimeJson} from './time.interface';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit {

  time: TimeJson[];

  constructor(private timeService: TimeService) {
  }

  ngOnInit() {
    this.timeService
      .getTime()
      .subscribe(
        data => this.time = data,
        error => console.log(error)
      );
  }

}
