import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallContactUsComponent } from './bookmyhall-contact-us.component';

describe('BookmyhallContactUsComponent', () => {
  let component: BookmyhallContactUsComponent;
  let fixture: ComponentFixture<BookmyhallContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
