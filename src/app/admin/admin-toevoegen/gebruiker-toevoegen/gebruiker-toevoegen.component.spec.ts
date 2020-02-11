import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerToevoegenComponent } from './gebruiker-toevoegen.component';

describe('GebruikerToevoegenComponent', () => {
  let component: GebruikerToevoegenComponent;
  let fixture: ComponentFixture<GebruikerToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
