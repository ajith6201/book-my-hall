import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallPhotoGalleryComponent } from './bookmyhall-photo-gallery.component';

describe('BookmyhallPhotoGalleryComponent', () => {
  let component: BookmyhallPhotoGalleryComponent;
  let fixture: ComponentFixture<BookmyhallPhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallPhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
