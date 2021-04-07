import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.page.html',
  styleUrls: ['./detalls.page.scss'],
})
export class DetallsPage implements OnInit {

  private info;
  public pokemons: Array<any>;
  public pokemon: Array<any>;
  private dadaPokemon;

  constructor(private route: ActivatedRoute, private dades: ApiServiceService) { 

  }

  ngOnInit() {
    this.dades.getPokemons().subscribe(
      (data: any) => {
       if (data.results){
        this.pokemons = data.results;
       }
      }
    )
    

    //localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    //this.dadaPokemon = localStorage.getItem('pokemons');

    //console.log(this.dadaPokemon);

    this.route.params.subscribe(
    
          res => this.info = res.nom
        );
    //guarda dades
    localStorage.setItem('pokemons', this.info);
    this.dadaPokemon = localStorage.getItem('pokemons');
    console.log(this.dadaPokemon);
}
}