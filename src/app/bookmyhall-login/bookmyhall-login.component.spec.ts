import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallLoginComponent } from './bookmyhall-login.component';

describe('BookmyhallLoginComponent', () => {
  let component: BookmyhallLoginComponent;
  let fixture: ComponentFixture<BookmyhallLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
