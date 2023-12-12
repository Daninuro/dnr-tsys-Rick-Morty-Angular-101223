import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesrandomComponent } from './components/personajesrandom/personajesrandom.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'personajes', component: PersonajesComponent
    },
    {
        path: 'personajesrandom', component: PersonajesrandomComponent
    },
    { 
        path: 'buscador/:term', component: BuscadorComponent 
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
