import {animate, Component, keyframes, NgZone, OnInit, style, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.scss'],
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
        style({transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ])
  ]
})
export class ShakeComponent implements OnInit {

  title = 'app works!';
  public wobbleState: string;

  constructor(public zone: NgZone) {
  }

  triggerAnimation() {
    this.wobbleState = 'active';
  }

  reset() {
    this.zone.run(() => {
      this.wobbleState = 'inactive';
    });
  }

  ngOnInit(): void {
  }

}
