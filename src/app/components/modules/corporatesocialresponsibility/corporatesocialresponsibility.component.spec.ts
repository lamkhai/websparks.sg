import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatesocialresponsibilityComponent } from './corporatesocialresponsibility.component';

describe('CorporatesocialresponsibilityComponent', () => {
  let component: CorporatesocialresponsibilityComponent;
  let fixture: ComponentFixture<CorporatesocialresponsibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatesocialresponsibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatesocialresponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
