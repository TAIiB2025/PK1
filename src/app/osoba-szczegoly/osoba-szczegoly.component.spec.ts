import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaSzczegolyComponent } from './osoba-szczegoly.component';

describe('OsobaSzczegolyComponent', () => {
  let component: OsobaSzczegolyComponent;
  let fixture: ComponentFixture<OsobaSzczegolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaSzczegolyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaSzczegolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
