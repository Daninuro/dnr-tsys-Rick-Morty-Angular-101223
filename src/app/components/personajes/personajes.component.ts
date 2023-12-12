import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.characters = data.results.slice(0, 8);
    });
  }
  showCharacterInfo(character: any) {
    alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`);
  }

}
