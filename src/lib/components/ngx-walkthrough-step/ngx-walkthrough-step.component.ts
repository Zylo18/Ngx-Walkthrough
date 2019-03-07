import { NgxWalkthroughService, WalkthroughState } from './../../ngx-walkthrough.service';
import { Component, OnInit, Input, TemplateRef, AfterViewInit, AfterContentInit, Renderer2, OnDestroy, ViewChild, ContentChild } from '@angular/core';
import { WalkthroughContentTargetDirective } from '../walkthrough-content-target.directive';

@Component({
  selector: 'ngx-walkthrough-step',
  templateUrl: './ngx-walkthrough-step.component.html',
  styleUrls: ['./ngx-walkthrough-step.component.css']
})
export class NgxWalkthroughStepComponent implements OnInit {
  private walkthroughState: WalkthroughState;
  stepIndex: number;
  selectedIndex: number;

  targetComp: HTMLElement;
  contentTarget;

  @Input('targetId') targetId: string;

  @Input('contentTemplate') content: TemplateRef<any>;
  
  @Input('stepRoute') stepRoute: TemplateRef<any>;

  @ContentChild(WalkthroughContentTargetDirective)
  set cT(cT) {
    this.contentTarget = cT
  };

  constructor(
    private ngxWalkthroughService: NgxWalkthroughService, 
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.ngxWalkthroughService.walkthroughState.subscribe(wS => this.onWalkthroughStateChange(wS))
    if ( this.targetId ){
      this.targetComp = document.querySelector(this.targetId);
    }
  }

  nextStep() {
    console.log(this.walkthroughState);
    this.ngxWalkthroughService.nextStep();
  }

  private onWalkthroughStateChange(wS: WalkthroughState) {
    this.walkthroughState = wS;
    this.selectedIndex = wS.currentStepIndex;

    if (this.stepIndex && this.stepIndex === wS.currentStepIndex) {
      if(this.targetComp) {
        this.renderer.setStyle(this.targetComp, 'z-index', 20);
      
        const compStyle = window.getComputedStyle(this.targetComp);
        const positionStyle = compStyle.getPropertyValue('position');

        if (positionStyle !== 'absolute') {
          this.renderer.setStyle(this.targetComp, 'position', 'relative')
        }
      }
    }

    if (this.stepIndex && this.stepIndex !== wS.currentStepIndex) {
      if(this.targetComp) {
        this.resetStep();
      }
    }
  }

  resetStep() {
    console.log(this.contentTarget)
    this.renderer.removeStyle(this.targetComp, 'z-index');
  }

}
