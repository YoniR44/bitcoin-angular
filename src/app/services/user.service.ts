import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageGlobal } from '../globals/storageGlobal';
import User from '../models/User'
import Move from '../models/Move';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _user:User;
  userSubject = new BehaviorSubject<User>(null);

  constructor() { 
    this.getUser();
  }

  public getUser():void {
    this._user = StorageGlobal.load('LOGGED_USER');
    this.userSubject.next(this._user)
  }

  public signup(name):void {
    this._user = new User(name);
    StorageGlobal.store('LOGGED_USER', this._user);
    this.userSubject.next(this._user);
  }

  public addMove(contact, amount) {
    if (this._user.coins >= amount) {
      this._user.moves.push(new Move(contact.name, contact._id, amount));
      this._user.coins -= amount;
      this.userSubject.next(this._user);
      StorageGlobal.store('LOGGED_USER', this._user);
    } else {
      console.log('Not enough coins');
    }
  }
}
