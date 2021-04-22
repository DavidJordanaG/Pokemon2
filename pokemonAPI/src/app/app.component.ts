import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Log In', url: '/folder/login', icon: 'log-in' },
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Perfil', url: '/folder/perfil', icon: 'person' },
    { title: 'Pokemons', url: '/folder/pokemon', icon: 'ribbon' },
    { title: 'Register', url: '/folder/register', icon: 'log-in' }
    
    
  ];
  
}
