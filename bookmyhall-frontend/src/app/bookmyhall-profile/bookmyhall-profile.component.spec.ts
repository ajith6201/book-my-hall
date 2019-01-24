import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallProfileComponent } from './bookmyhall-profile.component';

describe('BookmyhallProfileComponent', () => {
  let component: BookmyhallProfileComponent;
  let fixture: ComponentFixture<BookmyhallProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
