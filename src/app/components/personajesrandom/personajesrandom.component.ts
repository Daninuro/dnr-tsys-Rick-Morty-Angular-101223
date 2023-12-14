import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personajesrandom',
  standalone: true,
  imports: [],
  templateUrl: './personajesrandom.component.html',
  styleUrl: './personajesrandom.component.css'
})
export class PersonajesrandomComponent implements OnInit {

  characters: any[] = [];
  count:number = 0;

  constructor(private ServiceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    const randomIds = this.ServiceService.generateRandomIds(8);
    this.ServiceService.loadRandomCharacters(randomIds).subscribe((data: any) => {
      this.characters = data;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/character', characterId]);
  }

}
