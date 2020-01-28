import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmeringPersonenComponent } from './alarmering-personen.component';

describe('AlarmeringPersonenComponent', () => {
  let component: AlarmeringPersonenComponent;
  let fixture: ComponentFixture<AlarmeringPersonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmeringPersonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmeringPersonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
