import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service'; 
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [DatePipe,RouterLink],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {

  character: any;
  constructor(private route: ActivatedRoute,private ServiceService: ServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.ServiceService.getCharacterById(characterId).subscribe(
        (character: any) => {
          this.character = character;
        },
        error => {
          console.error('Error loading character:', error);
        }
      );
    });
  }

  

}

