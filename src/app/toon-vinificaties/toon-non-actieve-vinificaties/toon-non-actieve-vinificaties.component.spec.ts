import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonNonActieveVinificatiesComponent } from './toon-non-actieve-vinificaties.component';

describe('ToonNonActieveVinificatiesComponent', () => {
  let component: ToonNonActieveVinificatiesComponent;
  let fixture: ComponentFixture<ToonNonActieveVinificatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonNonActieveVinificatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonNonActieveVinificatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
