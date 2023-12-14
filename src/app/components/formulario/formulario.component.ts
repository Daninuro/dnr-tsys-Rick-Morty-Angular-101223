import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  newCharacter: any = {};
  message: string ="";

  constructor(private ApiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    this.ApiService.addCharacter(this.newCharacter).subscribe(
      response => {
        console.log('Character added successfully', response);
        this.newCharacter = {};
        this.message = 'Character added successfully'; 
        this.router.navigate(['/personajesapi']);
      },
      error => {
        console.error('Error adding character:', error);
        this.message = 'Error adding character'; 
      }
    );
  }
}
