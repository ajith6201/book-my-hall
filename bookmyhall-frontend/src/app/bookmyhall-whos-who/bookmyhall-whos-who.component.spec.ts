import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallWhosWhoComponent } from './bookmyhall-whos-who.component';

describe('BookmyhallWhosWhoComponent', () => {
  let component: BookmyhallWhosWhoComponent;
  let fixture: ComponentFixture<BookmyhallWhosWhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallWhosWhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallWhosWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
