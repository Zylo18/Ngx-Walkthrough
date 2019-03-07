import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[walkthroughContentTarget]'
})
export class WalkthroughContentTargetDirective {

  constructor(private el: ElementRef) { 
  
    return el.nativeElement;

  }

}
