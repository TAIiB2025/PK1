import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmyComponent } from './filmy.component';

describe('FilmyComponent', () => {
  let component: FilmyComponent;
  let fixture: ComponentFixture<FilmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
