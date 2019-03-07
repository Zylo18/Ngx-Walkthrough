import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWalkthroughStepComponent } from './ngx-walkthrough-step.component';

describe('NgxWalkthroughStepComponent', () => {
  let component: NgxWalkthroughStepComponent;
  let fixture: ComponentFixture<NgxWalkthroughStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWalkthroughStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWalkthroughStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
