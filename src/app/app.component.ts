import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from './osoba/osoba.component';
import { Osoba } from '../models/osoba.class';
import { LicznikComponent } from './licznik/licznik.component';
import { CommonModule } from '@angular/common';
import { ZaznaczoneOsobyComponent } from './zaznaczone-osoby/zaznaczone-osoby.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OsobaComponent, LicznikComponent, CommonModule, ZaznaczoneOsobyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'zajecia';
  osoby: Osoba[] = [
    new Osoba("Jan", "Kowalski", 33, false),
    new Osoba("Anna", "Nowak", 44, false),
    new Osoba("Adam", "XXX", 13, true),
    new Osoba("Ewelina", "YYY", 41, false),
  ];

  licznik = 0;
  wyswietlLicznik = true;

  constructor() {
    for(let os of this.osoby) {
      if(os.czyWyrozniona) {
        this.licznik++;
      }
    }
  }

  onZmianaWyroznienia(event: Osoba): void {
    event.czyWyrozniona = !event.czyWyrozniona;
    if(event.czyWyrozniona) {
      this.licznik++;
    } 
    else {
      this.licznik--;
    }
  }
}
