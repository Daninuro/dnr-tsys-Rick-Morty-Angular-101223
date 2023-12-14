import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  getCharacterById(characterId: number): Observable<any> {
    const url = `${this.api}/${characterId}`;
    return this.http.get<any>(url);
  }
  
  updateCharacter(characterId: number, updatedCharacter: any): Observable<any> {
    const url = `${this.api}/${characterId}`;
    return this.http.put<any>(url, updatedCharacter);
  }

  deleteCharacter(characterId: number): Observable<any> {
    const url = `${this.api}/${characterId}`;
    return this.http.delete<any>(url);
  }
  addCharacter(newCharacter: any): Observable<any> {
    return this.http.post<any>(this.api, newCharacter);
  }
}