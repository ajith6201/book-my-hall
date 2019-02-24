import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallBookingdetailsComponent } from './bookmyhall-bookingdetails.component';

describe('BookmyhallBookingdetailsComponent', () => {
  let component: BookmyhallBookingdetailsComponent;
  let fixture: ComponentFixture<BookmyhallBookingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallBookingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallBookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
