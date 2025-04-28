import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaznaczoneOsobyComponent } from './zaznaczone-osoby.component';

describe('ZaznaczoneOsobyComponent', () => {
  let component: ZaznaczoneOsobyComponent;
  let fixture: ComponentFixture<ZaznaczoneOsobyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZaznaczoneOsobyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaznaczoneOsobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
