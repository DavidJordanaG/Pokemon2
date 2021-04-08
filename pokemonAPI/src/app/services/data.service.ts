import { Inject, Injectable, InjectionToken } from '@angular/core';

export const DADES_LOCALS = new InjectionToken<Storage>('Dades Locals', {
  providedIn: 'root',
  factory: () => localStorage
});

export interface User {
    name: string;
  }

@Injectable({
  providedIn: 'root'
})

export class DataService {
    userList: Array<User>

  constructor(@Inject(DADES_LOCALS) public dades: Storage) {
    let ul=this.dades.getItem('userData');
    if (!ul) this.userList = [];
    else this.userList = JSON.parse(ul);
  }

  getUsers():Array<User>{
    return this.userList;
  }
  createUser(user: User):void {
    this.userList.push(user);
    this.dades.setItem('userData', JSON.stringify(this.userList));
  }
  updateUser(idUser: number, user: User):void {
    this.userList[idUser] = user;
    this.dades.setItem('userData', JSON.stringify(this.userList));
  }
  deleteUser(idUser:number):void {
    this.userList.splice(idUser,1);
    this.dades.setItem('userData', JSON.stringify(this.userList));
    if (this.userList.length==0) this.dades.removeItem('appData');
  }
  newUser():User{
    return <User>{name: ''};
  }
}