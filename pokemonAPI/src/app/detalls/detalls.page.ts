import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService, User } from '../services/data.service';

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

  @Input() user: User;
  @Input() idUser: number;

  edicio:boolean = false;
 
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

guardar(){
  this.dades.updateUser(this.idUser, this.user);
  this.edicio = false;
}
eliminar(){
  if (confirm("Segur que vols eliminar l'usuari " + this.user.name))
    this.dades.deleteUser(this.idUser);
}
  

}