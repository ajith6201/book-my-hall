import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallRegistrationComponent } from './bookmyhall-registration.component';

describe('BookmyhallRegistrationComponent', () => {
  let component: BookmyhallRegistrationComponent;
  let fixture: ComponentFixture<BookmyhallRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
