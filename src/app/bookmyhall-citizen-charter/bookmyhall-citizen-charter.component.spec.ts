import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallCitizenCharterComponent } from './bookmyhall-citizen-charter.component';

describe('BookmyhallCitizenCharterComponent', () => {
  let component: BookmyhallCitizenCharterComponent;
  let fixture: ComponentFixture<BookmyhallCitizenCharterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallCitizenCharterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallCitizenCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
