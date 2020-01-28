import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatuurComponent } from './temperatuur.component';

describe('TemperatuurComponent', () => {
  let component: TemperatuurComponent;
  let fixture: ComponentFixture<TemperatuurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatuurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatuurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
