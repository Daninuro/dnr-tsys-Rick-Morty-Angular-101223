import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesrandomComponent } from './components/personajesrandom/personajesrandom.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NgModule } from '@angular/core';
import { Error404Component } from './components/error404/error404.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajeApiComponent } from './components/api/personaje-api/personaje-api.component';
import { PersonajesApiComponent } from './components/api/personajes-api/personajes-api.component';
import { FormularioComponent } from './components/formulario/formulario.component';


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
    },
    { 
        path: 'character/:id', component: PersonajeComponent 
    },
    { 
        path: 'charactersApi/:id', component: PersonajeApiComponent 
    },
    { 
        path: 'personajesapi', component: PersonajesApiComponent 
    },
    { 
        path: 'formulario', component: FormularioComponent 
    },
    { 
        path: '404', component: Error404Component 
    },
    {
        path:'**', redirectTo:'404'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
