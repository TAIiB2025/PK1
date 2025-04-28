import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';
import { PodswietlenieDirective } from '../podswietlenie.directive';
import { ZaznaczoneOsobyService } from '../zaznaczone-osoby.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-osoba',
  imports: [CommonModule, PodswietlenieDirective],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent implements OnDestroy{
  @Input() osoba!: Osoba;
  @Output() zmianaWyroznienia = new EventEmitter<Osoba>();

  czyZaznaczona = false;
  czyNajechany = false;
  private readonly zaznaczoneOsobyService = inject(ZaznaczoneOsobyService);
  private readonly sub = new Subscription();

  constructor() {
    //this.osoba = new Osoba("Jan", "Kowalski", 33, false);
    const sub = this.zaznaczoneOsobyService.getOdznaczony().subscribe(odznaczonaOsoba => {
      if(odznaczonaOsoba === this.osoba) {
        this.czyZaznaczona = false;
      }
    });

    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onZmianaWyroznieniaClick(): void {
    this.zmianaWyroznienia.emit(this.osoba);
    //this.osoba.czyWyrozniona = !this.osoba.czyWyrozniona;
  }

  zaznacz(): void {
    this.zaznaczoneOsobyService.zaznacz(this.osoba);
    this.czyZaznaczona = true;
  }

  odznacz(): void {
    this.zaznaczoneOsobyService.odznacz(this.osoba);
    this.czyZaznaczona = false;
  }
}
