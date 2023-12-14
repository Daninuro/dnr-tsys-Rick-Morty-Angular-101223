import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  characters: any[] = [];

  constructor(private ServiceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.ServiceService.getCharacters().subscribe((data: any) => {
      this.characters = data.results.slice(0, 8);
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/character', characterId]);
  }

}
