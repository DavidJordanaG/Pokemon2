import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public perfil: string;

  @Input() user: User;
  @Input() idUser: number;


  edicio:boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private dades: DataService) { }

  ngOnInit() {
    this.perfil = this.activatedRoute.snapshot.paramMap.get('id');
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
