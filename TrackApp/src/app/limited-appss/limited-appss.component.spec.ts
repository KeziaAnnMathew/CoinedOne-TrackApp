import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedAppssComponent } from './limited-appss.component';

describe('LimitedAppssComponent', () => {
  let component: LimitedAppssComponent;
  let fixture: ComponentFixture<LimitedAppssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedAppssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedAppssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
