import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallAssociatedOrganisationsComponent } from './bookmyhall-associated-organisations.component';

describe('BookmyhallAssociatedOrganisationsComponent', () => {
  let component: BookmyhallAssociatedOrganisationsComponent;
  let fixture: ComponentFixture<BookmyhallAssociatedOrganisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallAssociatedOrganisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallAssociatedOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
