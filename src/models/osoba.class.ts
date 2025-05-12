export class Osoba {
    // imie: string;
    nazwisko: string;
    wiek: number;
    czyWyrozniona: boolean;
    id: number;

    static idGen = 1;

    constructor(public imie: string, nazwisko: string, wiek: number, czyWyrozniona: boolean) {
        // this.imie = imie;
        this.nazwisko = nazwisko;
        this.czyWyrozniona = czyWyrozniona;
        this.wiek = wiek;
        this.id = Osoba.idGen++;
    }
}