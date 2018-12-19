import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmyhallVisionMissionComponent } from './bookmyhall-vision-mission.component';

describe('BookmyhallVisionMissionComponent', () => {
  let component: BookmyhallVisionMissionComponent;
  let fixture: ComponentFixture<BookmyhallVisionMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmyhallVisionMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmyhallVisionMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
