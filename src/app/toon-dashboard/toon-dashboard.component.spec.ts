import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonDashboardComponent } from './toon-dashboard.component';

describe('ToonDashboardComponent', () => {
  let component: ToonDashboardComponent;
  let fixture: ComponentFixture<ToonDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
