import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWalkthroughArrowComponent } from './ngx-walkthrough-arrow.component';

describe('NgxWalkthroughArrowComponent', () => {
  let component: NgxWalkthroughArrowComponent;
  let fixture: ComponentFixture<NgxWalkthroughArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWalkthroughArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWalkthroughArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
