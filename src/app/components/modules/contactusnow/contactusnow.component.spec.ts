import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusnowComponent } from './contactusnow.component';

describe('ContactusnowComponent', () => {
  let component: ContactusnowComponent;
  let fixture: ComponentFixture<ContactusnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
