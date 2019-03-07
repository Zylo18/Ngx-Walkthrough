import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'ngx-walkthrough-arrow',
  templateUrl: './ngx-walkthrough-arrow.component.html',
  styleUrls: ['./ngx-walkthrough-arrow.component.css']
})
export class NgxWalkthroughArrowComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  arrowPosition: string;

  targetEl: HTMLElement;
  beforeEl: HTMLElement;

  eX = 272;
  eY = 383;
  mX = 348;
  mY = 572;
  sX = 570;
  sY = 342;

  @Input('afterElement')
  set afterElement(aE: HTMLElement) {
    this.targetEl = aE;
  };

  @Input('beforeElement')
  set beforeElement(bE: HTMLElement) {
    this.beforeEl = bE;
  }

  @Input('contentPadding') contentPadding: number = 0;

  @Input('stretch') stretch: number;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.calculateArrowPosition()
  }

  ngOnInit() {
    this.getScreenSize();
    this.calculateArrowPosition();
  }

  calculateArrowPosition() {
    const targetOffsetW = this.targetEl.offsetWidth / 2;
    const targetOffsetH = this.targetEl.offsetHeight;

    const beforeElOffsetW = this.beforeEl.offsetWidth;
    const beforeEloffsetH = this.beforeEl.offsetHeight + this.contentPadding;

    this.sX = this.targetEl.offsetLeft + targetOffsetW ;
    this.sY = this.targetEl.offsetTop + targetOffsetH + this.contentPadding;

    this.eX = this.beforeEl.offsetLeft - this.contentPadding;
    this.eY = this.beforeEl.offsetTop - beforeEloffsetH;

    this.mX = this.screenHeight / 2;
    this.mY = this.screenHeight / 2;

 
    this.render();
  }
  // eXChange(event) {
  //   this.eX = event.target.valueAsNumber;
  //   this.render();
  // }
  // eYChange(event) {
  //   this.eY = event.target.valueAsNumber;
  //   this.render();
  // }
  // sXChange(event) {
  //   this.sX = event.target.valueAsNumber;
  //   this.render();
  // }
  // sYChange(event) {
  //   this.sY = event.target.valueAsNumber;
  //   this.render();
  // }

  render() {
    this.arrowPosition = `M ${this.eX} ${this.eY} Q ${this.mX} ${this.mY} ${this.sX} ${this.sY}`;
  }

}
