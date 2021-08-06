import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhywebsparksComponent } from './whywebsparks.component';

describe('WhywebsparksComponent', () => {
  let component: WhywebsparksComponent;
  let fixture: ComponentFixture<WhywebsparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhywebsparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhywebsparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
