import { TestBed } from '@angular/core/testing';

import { ColorSubjectService } from './color-subject.service';

describe('ColorSubjectService', () => {
  let service: ColorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
