import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OsobyService } from '../osoby.service';
import { OsobaForm } from '../../models/osoba-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Osoba } from '../../models/osoba.class';

@Component({
  selector: 'app-osoba-formularz',
  imports: [FormsModule, CommonModule],
  templateUrl: './osoba-formularz.component.html',
  styleUrl: './osoba-formularz.component.css'
})
export class OsobaFormularzComponent {
  private readonly osobyService = inject(OsobyService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  wczytanoForm = false;

  public imie?: string;
  public nazwisko?: string;
  public wiek?: number;

  constructor() {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if(id != null) {
      this.osobyService.getById(+id).subscribe(res => {
        this.imie = res.imie;
        this.nazwisko = res.nazwisko;
        this.wiek = res.wiek;
        this.wczytanoForm = true;
      });
    } else {
      this.wczytanoForm = true;
    }
  }

  onWiekChange(wiek: number): void {
    console.log("zmiana wieku na ", wiek)
    this.imie = 'Anna ' + wiek;
  }

  onSubmit(form: NgForm): void {
    const osoba: OsobaForm = {
      imie: form.form.value['imie'],
      nazwisko: form.form.value['nazwisko'],
      wiek: form.form.value['wiek'],
    }

    console.log(osoba.imie, this.imie)
    console.log(osoba.nazwisko, this.nazwisko)
    console.log(osoba.wiek, this.wiek)

    // this.osobyService.post(osoba).subscribe(() => {
    //   console.log('Udało się dodać osobę.');
    //   this.router.navigate(['']);
    // });
  }
}
