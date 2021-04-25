import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedAppsComponent } from './blocked-apps.component';

describe('BlockedAppsComponent', () => {
  let component: BlockedAppsComponent;
  let fixture: ComponentFixture<BlockedAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
