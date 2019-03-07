import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWalkthroughComponent } from './ngx-walkthrough.component';

describe('NgxWalkthroughComponent', () => {
  let component: NgxWalkthroughComponent;
  let fixture: ComponentFixture<NgxWalkthroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWalkthroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
