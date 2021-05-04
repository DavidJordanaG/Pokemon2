import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AuthenticateService } from './authentication.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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

  constructor(@Inject(DADES_LOCALS) public dades: Storage, private db: AngularFireDatabase, 
  public authentication: AuthenticateService) {
    let ul=this.dades.getItem('userData');
    if (!ul) this.userList = [];
    else this.userList = JSON.parse(ul);
  }

  getUsers():any{
    return this.db.list(this.authentication.userDetails.uid).valueChanges()
    
  }
  createUser(user: User):void {
    this.db.database.ref(this.authentication.userDetails.uid).once('value')
      .then(
        snapshot => {
          console.log('Existeix:' + snapshot.child(user.name).exists());
          if (snapshot.child(user.name).exists()) {
            
          } else {
            this.db.list(this.authentication.userDetails.uid).set(user.name, user);
          }
        }
      );
    //this.userList.push(user);
    //this.dades.setItem('userData', JSON.stringify(this.userList));
  }
  updateUser(idUser: string, user: User):void {
    this.db.list(this.authentication.userDetails.uid).update(idUser, user);
    //this.userList[idUser] = user;
    //this.dades.setItem('userData', JSON.stringify(this.userList));
  }
  deleteUser(idUser: string):void {
    this.db.list(this.authentication.userDetails.uid).remove(idUser);
    //this.userList.splice(idUser,1);
    //this.dades.removeItem('userData');
  }
  newUser():User{
    return <User>{name: ''};
  }
  existUser(id:string):boolean{
    let found = false;
    /*let i = 0;
    while (i<this.userList.length && !found) {
      found = this.userList[i].name == id;
      i++
    }*/
    return found;
  }
}