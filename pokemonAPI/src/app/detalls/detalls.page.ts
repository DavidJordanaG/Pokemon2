import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.page.html',
  styleUrls: ['./detalls.page.scss'],
})
export class DetallsPage implements OnInit {

  public info: string;
  public pokemons: Array<any>;
  public pokemon: Array<any>;
  
  


  constructor(private route: ActivatedRoute, private dades: ApiServiceService, private dada: DataService) { }
 

  ngOnInit() {

    this.route.params.subscribe(
    
          res => {
            this.info = res.nom;
            
            this.dades.getPokemon(this.info).subscribe(
              (data: any) => {
              if (data){
                this.pokemon = data;
                console.log(data)
              }
              }
            )
          }
        );

}
//guarda dades
guardarDades(){
  localStorage.setItem('pokemons', this.info);
  
}

}