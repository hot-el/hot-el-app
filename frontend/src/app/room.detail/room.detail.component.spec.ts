import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room.DetailComponent } from './room.detail.component';

describe('Room.DetailComponent', () => {
  let component: Room.DetailComponent;
  let fixture: ComponentFixture<Room.DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room.DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
