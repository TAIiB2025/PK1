import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaFormularzComponent } from './osoba-formularz.component';

describe('OsobaFormularzComponent', () => {
  let component: OsobaFormularzComponent;
  let fixture: ComponentFixture<OsobaFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaFormularzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
