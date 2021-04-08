import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() idUser: number;

  edicio:boolean = false;

  constructor(private dades: DataService) { }

  ngOnInit(){}

  guardar(){
    this.dades.updateUser(this.idUser, this.user);
    this.edicio = false;
  }
  eliminar(){
    if (confirm("Segur que vols eliminar el país " + this.user.name + " ?"))
      this.dades.deleteUser(this.idUser);
  }

}