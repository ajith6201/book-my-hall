import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallPmuComponent } from './bookmyhall-pmu.component';

describe('BookmyhallPmuComponent', () => {
  let component: BookmyhallPmuComponent;
  let fixture: ComponentFixture<BookmyhallPmuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallPmuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallPmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
