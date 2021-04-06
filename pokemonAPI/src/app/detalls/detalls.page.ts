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

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    
  this.route.params.subscribe(
    
          res => this.info = res.nom
        );
}
}