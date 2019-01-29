import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallNewspaperComponent } from './bookmyhall-newspaper.component';

describe('BookmyhallNewspaperComponent', () => {
  let component: BookmyhallNewspaperComponent;
  let fixture: ComponentFixture<BookmyhallNewspaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallNewspaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
