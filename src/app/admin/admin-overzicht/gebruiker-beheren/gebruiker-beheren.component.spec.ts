import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerBeherenComponent } from './gebruiker-beheren.component';

describe('GebruikerBeherenComponent', () => {
  let component: GebruikerBeherenComponent;
  let fixture: ComponentFixture<GebruikerBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
