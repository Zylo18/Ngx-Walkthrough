import { TestBed } from '@angular/core/testing';

import { NgxWalkthroughService } from './ngx-walkthrough.service';

describe('NgxWalkthroughService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxWalkthroughService = TestBed.get(NgxWalkthroughService);
    expect(service).toBeTruthy();
  });
});
