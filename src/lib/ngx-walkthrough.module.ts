import { NgModule } from '@angular/core';
import { NgxWalkthroughComponent } from './ngx-walkthrough.component';
import { NgxWalkthroughStepComponent } from './components/ngx-walkthrough-step/ngx-walkthrough-step.component';
import { NgxWalkthroughContainerComponent } from './components/ngx-walkthrough-container/ngx-walkthrough-container.component';
import { CommonModule } from '@angular/common';
import { NgxWalkthroughArrowComponent } from './components/ngx-walkthrough-arrow/ngx-walkthrough-arrow.component';
import { WalkthroughContentTargetDirective } from './components/walkthrough-content-target.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxWalkthroughComponent, NgxWalkthroughStepComponent, NgxWalkthroughContainerComponent, NgxWalkthroughArrowComponent, WalkthroughContentTargetDirective],
  exports: [NgxWalkthroughComponent, NgxWalkthroughStepComponent, WalkthroughContentTargetDirective]
})
export class NgxWalkthroughModule { }
