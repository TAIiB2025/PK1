import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OsobyService } from '../osoby.service';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-osoba-szczegoly',
  imports: [CommonModule, RouterLink],
  templateUrl: './osoba-szczegoly.component.html',
  styleUrl: './osoba-szczegoly.component.css'
})
export class OsobaSzczegolyComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly osobyService = inject(OsobyService);
  osoba?: Osoba;

  constructor() {
    let id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if(id == null) {
      id = '0';
    }

    const osoba$ = this.osobyService.getById(+id);
    osoba$.subscribe(os => this.osoba = os);
  }
}
