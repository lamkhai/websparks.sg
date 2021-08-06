import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcultureComponent } from './ourculture.component';

describe('OurcultureComponent', () => {
  let component: OurcultureComponent;
  let fixture: ComponentFixture<OurcultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
