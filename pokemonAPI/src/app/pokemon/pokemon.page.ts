import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public pokemons: Array<any>;
  public pokemon: Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private dades: ApiServiceService) { }

  ngOnInit() {
    //this.pokemon = this.activatedRoute.snapshot.paramMap.get('id');
    this.dades.getPokemons().subscribe(
      (data: any) => {
       if (data.results){
        this.pokemons = data.results;
       }
      }
    )

    this.dades.getPokemon("pokemon").subscribe(
      (data: any) => {
       if (data.results){
        this.pokemon = data.results;
       }
      }
    )
  }
  
  IMGSR(p:any){

    var urlp =p.url;
    var splitted = urlp.split('/')
    var source= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+splitted[6]+'.png'
    return source;
  }
}
