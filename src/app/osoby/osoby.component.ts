import { Component, inject } from '@angular/core';
import { OsobaComponent } from '../osoba/osoba.component';
import { CommonModule } from '@angular/common';
import { Osoba } from '../../models/osoba.class';
import { LicznikComponent } from '../licznik/licznik.component';
import { ZaznaczoneOsobyComponent } from '../zaznaczone-osoby/zaznaczone-osoby.component';
import { OsobyService } from '../osoby.service';

@Component({
  selector: 'app-osoby',
  imports: [OsobaComponent, LicznikComponent, CommonModule, ZaznaczoneOsobyComponent],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {
  private readonly osobyService = inject(OsobyService);

  osoby!: Osoba[];

  licznik = 0;
  wyswietlLicznik = true;

  constructor() {
    this.osobyService.get().subscribe(res => {
      for(let os of res) {
        if(os.czyWyrozniona) {
          this.licznik++;
        }
      }

      this.osoby = res;
    });
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
