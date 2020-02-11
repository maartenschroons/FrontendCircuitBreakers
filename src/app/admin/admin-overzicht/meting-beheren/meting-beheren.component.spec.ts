import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetingBeherenComponent } from './meting-beheren.component';

describe('MetingBeherenComponent', () => {
  let component: MetingBeherenComponent;
  let fixture: ComponentFixture<MetingBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetingBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetingBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
