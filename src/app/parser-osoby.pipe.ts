import { Pipe, PipeTransform } from '@angular/core';
import { Osoba } from '../models/osoba.class';

@Pipe({
  name: 'parserOsoby'
})
export class ParserOsobyPipe implements PipeTransform {

  transform(value: Osoba, separator: string = ' '): string {
    return value.imie + separator + value.nazwisko;
  }

}
