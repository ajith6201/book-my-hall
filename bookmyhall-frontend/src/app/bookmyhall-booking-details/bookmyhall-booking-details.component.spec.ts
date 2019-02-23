import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallBookingDetailsComponent } from './bookmyhall-booking-details.component';

describe('BookmyhallBookingDetailsComponent', () => {
  let component: BookmyhallBookingDetailsComponent;
  let fixture: ComponentFixture<BookmyhallBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
