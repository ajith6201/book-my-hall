import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallInformationCenterComponent } from './bookmyhall-information-center.component';

describe('BookmyhallInformationCenterComponent', () => {
  let component: BookmyhallInformationCenterComponent;
  let fixture: ComponentFixture<BookmyhallInformationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallInformationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallInformationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
