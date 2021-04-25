import { TestBed } from '@angular/core/testing';

import { TrackScheduleService } from './track-schedule.service';

describe('TrackScheduleService', () => {
  let service: TrackScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
