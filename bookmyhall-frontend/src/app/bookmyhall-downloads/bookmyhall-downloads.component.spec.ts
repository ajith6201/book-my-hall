import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallDownloadsComponent } from './bookmyhall-downloads.component';

describe('BookmyhallDownloadsComponent', () => {
  let component: BookmyhallDownloadsComponent;
  let fixture: ComponentFixture<BookmyhallDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
