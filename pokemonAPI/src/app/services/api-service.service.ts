import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
   getPokemons(pokemon:string){
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;

    return this.http.get(apiURL);
  }
}
