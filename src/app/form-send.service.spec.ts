import { TestBed } from '@angular/core/testing';

import { FormSendService } from './form-send.service';

describe('FormSendService', () => {
  let service: FormSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
