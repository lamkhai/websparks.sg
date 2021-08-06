import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwebsparksComponent } from './aboutwebsparks.component';

describe('AboutwebsparksComponent', () => {
  let component: AboutwebsparksComponent;
  let fixture: ComponentFixture<AboutwebsparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutwebsparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwebsparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
