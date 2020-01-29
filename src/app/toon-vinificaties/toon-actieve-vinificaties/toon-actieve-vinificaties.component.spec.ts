import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonActieveVinificatiesComponent } from './toon-actieve-vinificaties.component';

describe('ToonActieveVinificatiesComponent', () => {
  let component: ToonActieveVinificatiesComponent;
  let fixture: ComponentFixture<ToonActieveVinificatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonActieveVinificatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonActieveVinificatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
