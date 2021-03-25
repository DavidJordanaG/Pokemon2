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

  constructor(private activatedRoute: ActivatedRoute, private dades: ApiServiceService) { }

  ngOnInit() {
    //this.pokemon = this.activatedRoute.snapshot.paramMap.get('id');
    this.dades.getPokemons().subscribe(
      (data: any) => {
       // this.loading = false;
       if (data.results){
        this.pokemons = data.results;
        console.log(this.pokemons)
       }

      }
    )
  }

}
