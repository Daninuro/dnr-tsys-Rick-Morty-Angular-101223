import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personajesrandom',
  standalone: true,
  imports: [],
  templateUrl: './personajesrandom.component.html',
  styleUrl: './personajesrandom.component.css'
})
export class PersonajesrandomComponent {

  characters: any[] = [];
  count:number = 0;
  randomCharacterIds: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateRandomIds();
    this.loadRandomCharacters();
  }

  generateRandomIds() {
    while (this.randomCharacterIds.length < 12) {
      const randomId = Math.floor(Math.random() * 826) + 1;
      if (!this.randomCharacterIds.includes(randomId)) {
        this.randomCharacterIds.push(randomId);
      }
    }
  }

  loadRandomCharacters() {//Load random characters
    const url = `https://rickandmortyapi.com/api/character/${this.randomCharacterIds.join(',')}`;
    this.http.get(url).subscribe((data: any) => {
      this.characters = data.slice(0, 8);;
    });
  }
  showCharacterInfo(character: any) {
    alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`);
  }

}
