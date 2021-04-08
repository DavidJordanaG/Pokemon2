import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-components',
  templateUrl: './pokemon.component.html'
})
export class CountryComponent  {

  @Input() user: User;
  @Input() idUser: number;

  edicio:boolean = false;

  constructor(private dades: DataService) { }

  guardar(){
    this.dades.updateUser(this.idUser, this.user);
    this.edicio = false;
  }
  eliminar(){
    if (confirm("Segur que vols eliminar el país " + this.user.name + " ?"))
      this.dades.deleteUser(this.idUser);
  }

}