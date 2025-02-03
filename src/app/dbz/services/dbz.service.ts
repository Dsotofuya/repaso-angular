import { Injectable } from '@angular/core';

import { v7 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Picolo',
    power: 5000
  }]


  addCharacter(character : Character): void {
    let  newCharacter : Character = {  id: uuid(), ...character };
    this.characters.push(newCharacter);

  }


  deleteCharacterById( uuid : string): void {
    console.log(uuid);

    this.characters = this.characters.filter( character => character.id !== uuid );
  }
}
