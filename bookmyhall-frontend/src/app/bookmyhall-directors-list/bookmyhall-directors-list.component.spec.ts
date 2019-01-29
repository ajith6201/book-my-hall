import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallDirectorsListComponent } from './bookmyhall-directors-list.component';

describe('BookmyhallDirectorsListComponent', () => {
  let component: BookmyhallDirectorsListComponent;
  let fixture: ComponentFixture<BookmyhallDirectorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallDirectorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallDirectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
