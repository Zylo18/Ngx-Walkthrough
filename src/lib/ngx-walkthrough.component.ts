import { NgxWalkthroughContainerComponent } from './components/ngx-walkthrough-container/ngx-walkthrough-container.component';
import { NgxWalkthroughService, WalkthroughState } from './ngx-walkthrough.service';
import { NgxWalkthroughStepComponent } from './components/ngx-walkthrough-step/ngx-walkthrough-step.component';
import { Component, OnInit, QueryList, AfterViewInit, ContentChildren, ViewContainerRef, forwardRef, ChangeDetectorRef, AfterContentChecked, AfterContentInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-walkthrough',
  templateUrl: 'ngx-walkthrough.component.html',
  styles: []
})
export class NgxWalkthroughComponent implements OnInit, AfterViewInit, AfterContentInit {
  currentIndex: number;
  walkthroughState: WalkthroughState;

  @ContentChildren(forwardRef(() => NgxWalkthroughStepComponent), { descendants: true }) steps: QueryList<NgxWalkthroughStepComponent>;

  @ViewChild(NgxWalkthroughContainerComponent) container: NgxWalkthroughContainerComponent;

  @Input('baseZindex') baseZ: number | 10;
  @Input('contentPadding') contentPadding: number = 0;

  constructor(private ngxWalkthroughService: NgxWalkthroughService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.container.baseZindex = this.baseZ;
  }
  
  ngAfterViewInit() {
    this.ngxWalkthroughService.walkthroughState.subscribe(wS => this.walkthroughState = wS)
    this.walkthroughState.totalSteps = this.steps.length;
  }
  
  ngAfterContentInit() {
    this.steps.forEach((step, stepIndex) => this.configStep(step, stepIndex) );
  }

  nextStep() {
    this.ngxWalkthroughService.nextStep();
  }

  prevStep() {
    this.ngxWalkthroughService.prevStep();
  }

  private configStep(step: NgxWalkthroughStepComponent, stepIndex: number) {
    step.stepIndex = stepIndex + 1;
  }


}
