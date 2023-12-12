import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { RouterLink } from '@angular/router';
import { PersonajesComponent } from "./components/personajes/personajes.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HttpClientModule, BarraNavComponent, RouterLink, PersonajesComponent]
})
export class AppComponent {
  title = 'dnr-tsys-Rick-Morty-Angular-101223';
}
