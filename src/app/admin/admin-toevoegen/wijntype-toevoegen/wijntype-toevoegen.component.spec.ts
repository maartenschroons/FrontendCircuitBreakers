import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijntypeToevoegenComponent } from './wijntype-toevoegen.component';

describe('WijntypeToevoegenComponent', () => {
  let component: WijntypeToevoegenComponent;
  let fixture: ComponentFixture<WijntypeToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijntypeToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijntypeToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
