import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallHomeComponent } from './bookmyhall-home.component';

describe('BookmyhallHomeComponent', () => {
  let component: BookmyhallHomeComponent;
  let fixture: ComponentFixture<BookmyhallHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
