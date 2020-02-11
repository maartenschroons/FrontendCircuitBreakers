import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBeherenComponent } from './event-beheren.component';

describe('EventBeherenComponent', () => {
  let component: EventBeherenComponent;
  let fixture: ComponentFixture<EventBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
