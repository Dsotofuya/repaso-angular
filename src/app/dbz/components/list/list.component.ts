import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public indexEvent : EventEmitter<string> = new EventEmitter();

  @Input('xd')
  public characterList: Character[] = [{
    name: 'Diego',
    power: 1
  }]

  xd: boolean = false;


  onDeleteCharacterById(uuid : string ): void {
    console.log(uuid);

    this.indexEvent.emit(uuid);
  }

}
