import { Component } from '@angular/core';
import { DataService, User } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  users:Array<User>;
  newUser:User = this.dades.newUser();

  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Perfil', url: '/folder/perfil', icon: 'person' },
    { title: 'Pokemons', url: '/folder/pokemon', icon: 'ribbon' },
    
  ];

  afegint:boolean = false;

  
  constructor(private dades: DataService) { 
    this.users = this.dades.getUsers();
  }

  afegir(){
    this.dades.createUser(this.newUser);

    this.afegint=false;    
    this.newUser = this.dades.newUser();
  }

}
