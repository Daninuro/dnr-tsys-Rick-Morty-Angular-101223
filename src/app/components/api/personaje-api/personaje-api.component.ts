import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DatePipe, JsonPipe } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-personaje-api',
  standalone: true,
  imports: [DatePipe,JsonPipe,CommonModule],
  templateUrl: './personaje-api.component.html',
  styleUrl: './personaje-api.component.css'
})
export class PersonajeApiComponent implements OnInit{

  character: any;
  message: string = "";

  constructor(private route: ActivatedRoute, private ApiService: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterIdString = params.get('id');
      console.log(characterIdString);
  
      if (characterIdString !== null) {
        const characterId = parseInt(characterIdString, 10);
  
        if (!isNaN(characterId)) {
          this.loadCharacter(characterId);
        } else {
          console.error('Character ID is not a valid number');
        }
      } else {
        console.error('Character ID is null');
      }
    });
  }
  
  loadCharacter(characterId: number) {
    this.ApiService.getCharacterById(characterId).subscribe(
      (character: any) => {
        this.character = character;
      },
      error => {
        console.error('Error loading character:', error);
      }
    );
  }
  
  editCharacter() {
    const newCharacterName = prompt('Enter the new character name', this.character.name);
  
    if (newCharacterName !== null) {
      const updatedCharacter = { ...this.character, name: newCharacterName };
      this.ApiService.updateCharacter(this.character.id, updatedCharacter).subscribe(
        () => {
          this.character = updatedCharacter;
        },
        error => {
          console.error('Error updating character:', error);
        }
      );
    }
  }
  
  deleteCharacter() {
    if (confirm('Are you sure you want to delete this character?')) {
      this.ApiService.deleteCharacter(this.character.id).subscribe(
        () => {
          this.message = 'Character deleted successfully.';
          this.router.navigate(['/personajesapi']);
        },
        error => {
          console.error('Error deleting character:', error);
        }
      );
    }
  }

}