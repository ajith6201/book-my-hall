import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallAboutusComponent } from './bookmyhall-aboutus.component';

describe('BookmyhallAboutusComponent', () => {
  let component: BookmyhallAboutusComponent;
  let fixture: ComponentFixture<BookmyhallAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
