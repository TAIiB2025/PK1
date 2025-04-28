import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';
import { PodswietlenieDirective } from '../podswietlenie.directive';

@Component({
  selector: 'app-osoba',
  imports: [CommonModule, PodswietlenieDirective],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent {
  @Input() osoba!: Osoba;
  @Output() zmianaWyroznienia = new EventEmitter<Osoba>();

  czyNajechany = false;

  constructor() {
    //this.osoba = new Osoba("Jan", "Kowalski", 33, false);
  }

  onZmianaWyroznieniaClick(): void {
    this.zmianaWyroznienia.emit(this.osoba);
    //this.osoba.czyWyrozniona = !this.osoba.czyWyrozniona;
  }
}
