import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentprojectsComponent } from './recentprojects.component';

describe('RecentprojectsComponent', () => {
  let component: RecentprojectsComponent;
  let fixture: ComponentFixture<RecentprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
