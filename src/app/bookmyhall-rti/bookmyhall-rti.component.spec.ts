import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallRtiComponent } from './bookmyhall-rti.component';

describe('BookmyhallRtiComponent', () => {
  let component: BookmyhallRtiComponent;
  let fixture: ComponentFixture<BookmyhallRtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallRtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallRtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
