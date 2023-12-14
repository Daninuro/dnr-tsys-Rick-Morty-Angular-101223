import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barra-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barra-nav.component.html',
  styleUrl: './barra-nav.component.css'
})
export class BarraNavComponent {

  @ViewChild('name')name!: ElementRef;

  constructor(private router: Router) {}

  buscar() {
      this.router.navigate(['/buscador/', this.name.nativeElement.value]);
  }
}
