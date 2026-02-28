import { Routes } from '@angular/router';
import { Inicio } from './public-site/inicio/inicio';
import { Servicios } from './public-site/servicios/servicios';
import { Cotizador } from './public-site/cotizador/cotizador';
import { Rastreo } from './public-site/rastreo/rastreo';
import { Registro } from './public-site/registro/registro';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    { path: 'inicio', component: Inicio },
    { path: 'servicios', component: Servicios },
    { path: 'cotizador', component: Cotizador },
    { path: 'rastreo', component: Rastreo },
    { path: 'registro', component: Registro },


    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];
