import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {


  color = 'pink';
  size = 16;
  displayText = 'show-class';
  visible = true;

  constructor() {
    this.color = 'pink';
    this.size = 16;
    this.displayText = 'show-class';
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  ngOnInit() {
  }

}
