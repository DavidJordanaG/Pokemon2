import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public perfil: string;
  users:Array<User>;
  newUser:User = this.dades.newUser();

  constructor(private activatedRoute: ActivatedRoute, private dades: DataService) { 
    this.users = this.dades.getUsers();
  }

  afegint:boolean = false;

  ngOnInit() {
    this.perfil = this.activatedRoute.snapshot.paramMap.get('id');
  }

  afegir(){
    if (this.newUser.name.length>0){
      this.dades.createUser(this.newUser);
      this.afegint=false;    
      this.newUser = this.dades.newUser();
      console.log(this.newUser);
    }
  }
  
  
}
