import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
   getPokemons(){
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

    return this.http.get(apiURL);
  }

  getPokemon(pokemon:string){
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;

    return this.http.get(apiURL);
  }
}
