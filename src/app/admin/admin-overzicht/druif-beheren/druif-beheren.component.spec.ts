import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DruifBeherenComponent } from './druif-beheren.component';

describe('DruifBeherenComponent', () => {
  let component: DruifBeherenComponent;
  let fixture: ComponentFixture<DruifBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DruifBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DruifBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
