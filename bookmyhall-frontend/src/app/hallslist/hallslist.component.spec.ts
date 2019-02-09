import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallslistComponent } from './hallslist.component';

describe('HallslistComponent', () => {
  let component: HallslistComponent;
  let fixture: ComponentFixture<HallslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
