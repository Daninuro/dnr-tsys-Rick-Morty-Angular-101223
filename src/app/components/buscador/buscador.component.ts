import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  searchTerm: string = '';
  searchResults: any[] = [];
  selectedCharacter: any;

  constructor(private route: ActivatedRoute,private ServiceService: ServiceService, private router: Router) {}

ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.search();
    });
  }

  search() {
    this.ServiceService.searchCharactersByName(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/character', characterId]);
  }

}
