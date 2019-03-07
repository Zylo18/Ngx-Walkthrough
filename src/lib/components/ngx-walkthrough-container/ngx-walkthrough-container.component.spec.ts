import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWalkthroughContainerComponent } from './ngx-walkthrough-container.component';

describe('NgxWalkthroughContainerComponent', () => {
  let component: NgxWalkthroughContainerComponent;
  let fixture: ComponentFixture<NgxWalkthroughContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWalkthroughContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWalkthroughContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
