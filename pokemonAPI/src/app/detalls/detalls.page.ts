import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiServiceService } from '../services/api-service.service';
import { DataService, User } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.page.html',
  styleUrls: ['./detalls.page.scss'],
})
export class DetallsPage implements OnInit {

  public info: string;
  public pokemons: Array<any>;
  public pokemon: Array<any>;
  public habilitats: Array<any>
  public moviments: Array<any>
  public fotos: Array<any>

  users:Array<User>;
  @Output() close = new EventEmitter<number>();
  
  edicio:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private dades: ApiServiceService, private dada: DataService) {
    this.users = this.dada.getUsers();
   }
 

  ngOnInit() {

    this.route.params.subscribe(
    
          res => {
            this.info = res.nom;
            
            this.dades.getPokemon(this.info).subscribe(
              (data: any) => {
              if (data){
                this.pokemon = data;

                this.fotos = data.sprites
                this.habilitats = data.abilities
                this.moviments = data.moves
                
              }
              }
            )
          }
        );

}
afegir(){
 
   
    let newUser = {
      
      name: this.info,
      
    };
    if (newUser.name.length>0) {
      if (this.dada.existUser(newUser.name)) {
        alert("el pokemon ja és a la llista");
      }
      else{
        if (this.users.length <= 5) {
          this.dada.createUser(newUser);
          console.log(newUser);
        }
        else{
          alert('Només es pot 6 pokemons per equip');
        }
      }
    }
    
}

amagar(){
  this.close.emit();
  console.log("aaa");
}

}