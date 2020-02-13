import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaalBeherenComponent } from './materiaal-beheren.component';

describe('MateriaalBeherenComponent', () => {
  let component: MateriaalBeherenComponent;
  let fixture: ComponentFixture<MateriaalBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaalBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaalBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
