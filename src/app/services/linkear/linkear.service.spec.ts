import { TestBed } from '@angular/core/testing';

import { LinkearService } from './linkear.service';

describe('LinkearService', () => {
  let service: LinkearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
