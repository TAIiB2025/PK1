import { Component, OnDestroy, inject } from '@angular/core';
import { ZaznaczoneOsobyService } from '../zaznaczone-osoby.service';
import { CommonModule } from '@angular/common';
import { Osoba } from '../../models/osoba.class';
import { Observable, Subscription } from 'rxjs';
import { ParserOsobyPipe } from '../parser-osoby.pipe';

@Component({
  selector: 'app-zaznaczone-osoby',
  imports: [CommonModule, ParserOsobyPipe],
  templateUrl: './zaznaczone-osoby.component.html',
  styleUrl: './zaznaczone-osoby.component.css'
})
export class ZaznaczoneOsobyComponent implements OnDestroy {
  private readonly zaznaczoneOsobyService = inject(ZaznaczoneOsobyService);

  // get zaznaczoneOsoby(): Osoba[] {
  //   console.log('get')
  //   return this.zaznaczoneOsobyService.zaznaczoneOsoby;
  // }

  // zaznaczoneOsoby!: Osoba[];

  // private readonly subskrypcje = new Subscription();

  private static licznik = 1;
  private intervalId!: any;
  public readonly zaznaczoneOsoby$: Observable<Osoba[]> = this.zaznaczoneOsobyService.getZaznaczoneOsoby();

  constructor() {
    // const sub = this.zaznaczoneOsobyService.getZaznaczoneOsoby().subscribe(osoby => {
    //   this.zaznaczoneOsoby = osoby;
    //   console.log('odebrano informacje');
    // });

    let licznik = ZaznaczoneOsobyComponent.licznik++;
    // this.subskrypcje.add(sub);
    const intervalId = setInterval(() => console.log('interval ', licznik), 100);
    this.intervalId = intervalId;
  }

  ngOnDestroy(): void {
    // this.subskrypcje.unsubscribe();
    clearInterval(this.intervalId);    
  }

  odznacz(osoba: Osoba): void {
    this.zaznaczoneOsobyService.odznacz(osoba);
  }
}
