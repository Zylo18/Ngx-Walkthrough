import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-walkthrough-container',
  templateUrl: './ngx-walkthrough-container.component.html',
  styleUrls: ['./ngx-walkthrough-container.component.css']
})

export class NgxWalkthroughContainerComponent implements OnInit {
  baseZindex: number;

  @ViewChild('container') container: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.container.nativeElement, 'z-index', this.baseZindex)
  }
}
