import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmeringDataComponent } from './alarmering-data.component';

describe('AlarmeringDataComponent', () => {
  let component: AlarmeringDataComponent;
  let fixture: ComponentFixture<AlarmeringDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmeringDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmeringDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
