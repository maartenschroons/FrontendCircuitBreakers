import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroebelheidComponent } from './troebelheid.component';

describe('TroebelheidComponent', () => {
  let component: TroebelheidComponent;
  let fixture: ComponentFixture<TroebelheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroebelheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroebelheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
