import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

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

  afegint:boolean = false;

  constructor(private route: ActivatedRoute, private dades: DataService) { 

  }

  ngOnInit() {

    this.route.params.subscribe(
    
          res => this.info = res.nom
        );

    //guarda dades
    localStorage.setItem('pokemons', this.info);
    this.dadaPokemon = localStorage.getItem('pokemons');
    console.log(this.dadaPokemon);
    
}

}