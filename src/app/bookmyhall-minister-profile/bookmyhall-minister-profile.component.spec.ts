import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallMinisterProfileComponent } from './bookmyhall-minister-profile.component';

describe('BookmyhallMinisterProfileComponent', () => {
  let component: BookmyhallMinisterProfileComponent;
  let fixture: ComponentFixture<BookmyhallMinisterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallMinisterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallMinisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
