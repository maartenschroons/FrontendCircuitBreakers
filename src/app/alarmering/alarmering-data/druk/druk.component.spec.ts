import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrukComponent } from './druk.component';

describe('DrukComponent', () => {
  let component: DrukComponent;
  let fixture: ComponentFixture<DrukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
