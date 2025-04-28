import { Component, Input } from '@angular/core';
import { PodswietlenieDirective } from '../podswietlenie.directive';

@Component({
  selector: 'app-licznik',
  imports: [PodswietlenieDirective],
  templateUrl: './licznik.component.html',
  styleUrl: './licznik.component.css'
})
export class LicznikComponent {
  @Input() licznik = 0;
  @Input() opis = '';
}
