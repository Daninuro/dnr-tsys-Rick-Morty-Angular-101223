import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service'; 
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-personajes-api',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personajes-api.component.html',
  styleUrl: './personajes-api.component.css'
})
export class PersonajesApiComponent {

  characters: any[] = [];

  constructor(private ApiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.ApiService.getCharacters().subscribe((data: any) => {
      this.characters = data;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/charactersApi', characterId]);
  }

}
