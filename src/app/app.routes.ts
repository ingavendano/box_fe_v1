import { Routes } from '@angular/router';
import { Inicio } from './public-site/inicio/inicio';
import { Servicios } from './public-site/servicios/servicios';
import { Cotizador } from './public-site/cotizador/cotizador';
import { Rastreo } from './public-site/rastreo/rastreo';
import { Registro } from './public-site/registro/registro';
import { Login } from './public-site/login/login';

import { Layout } from './client/layout/layout';
import { Dashboard } from './client/dashboard/dashboard';
import { Perfil } from './client/perfil/perfil';
import { Direccion } from './client/direccion/direccion';
import { Cotizar } from './client/cotizar/cotizar';
import { Rastreo as ClientRastreo } from './client/rastreo/rastreo';
import { Historial } from './client/historial/historial';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    { path: 'inicio', component: Inicio },
    { path: 'servicios', component: Servicios },
    { path: 'cotizador', component: Cotizador },
    { path: 'rastreo', component: Rastreo },
    { path: 'registro', component: Registro },
    { path: 'login', component: Login },

    // Client Private Routes
    {
        path: 'client',
        component: Layout,
        children: [
            { path: 'resumen', component: Dashboard },
            { path: 'perfil', component: Perfil },
            { path: 'direcciones', component: Direccion },
            { path: 'cotizar', component: Cotizar },
            { path: 'rastreo', component: ClientRastreo },
            { path: 'historico', component: Historial },
            { path: '', redirectTo: 'resumen', pathMatch: 'full' }
        ]
    },

    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];
