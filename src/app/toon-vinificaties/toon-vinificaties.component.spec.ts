import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonVinificatiesComponent } from './toon-vinificaties.component';

describe('ToonVinificatiesComponent', () => {
  let component: ToonVinificatiesComponent;
  let fixture: ComponentFixture<ToonVinificatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToonVinificatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonVinificatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
