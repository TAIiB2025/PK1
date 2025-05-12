import { Routes } from '@angular/router';
import { KlienciComponent } from './klienci/klienci.component';
import { OsobyComponent } from './osoby/osoby.component';
import { FilmyComponent } from './filmy/filmy.component';
import { OsobaSzczegolyComponent } from './osoba-szczegoly/osoba-szczegoly.component';
import { OsobaFormularzComponent } from './osoba-formularz/osoba-formularz.component';

export const routes: Routes = [
    { path: 'klienci', component: KlienciComponent },
    { path: 'osoby', children: 
        [
            { path: '', component: OsobyComponent},
            { path: 'form', component: OsobaFormularzComponent},
            { path: ':id', component: OsobaSzczegolyComponent},
            { path: ':id/form', component: OsobaFormularzComponent},
        ] 
    },
    { path: 'filmy', component: FilmyComponent},
    { path: '',   redirectTo: 'osoby', pathMatch: 'full' }
];
