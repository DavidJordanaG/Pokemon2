import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public pokemon: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemon = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
