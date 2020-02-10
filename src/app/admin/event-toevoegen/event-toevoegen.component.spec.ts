import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventToevoegenComponent } from './event-toevoegen.component';

describe('EventToevoegenComponent', () => {
  let component: EventToevoegenComponent;
  let fixture: ComponentFixture<EventToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
