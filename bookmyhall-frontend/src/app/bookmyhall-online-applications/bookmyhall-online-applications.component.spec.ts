import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallOnlineApplicationsComponent } from './bookmyhall-online-applications.component';

describe('BookmyhallOnlineApplicationsComponent', () => {
  let component: BookmyhallOnlineApplicationsComponent;
  let fixture: ComponentFixture<BookmyhallOnlineApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallOnlineApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallOnlineApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
