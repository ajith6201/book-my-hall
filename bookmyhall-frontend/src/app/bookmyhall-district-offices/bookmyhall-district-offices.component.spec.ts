import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallDistrictOfficesComponent } from './bookmyhall-district-offices.component';

describe('BookmyhallDistrictOfficesComponent', () => {
  let component: BookmyhallDistrictOfficesComponent;
  let fixture: ComponentFixture<BookmyhallDistrictOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallDistrictOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallDistrictOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
