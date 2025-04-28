import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicznikComponent } from './licznik.component';

describe('LicznikComponent', () => {
  let component: LicznikComponent;
  let fixture: ComponentFixture<LicznikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicznikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicznikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
