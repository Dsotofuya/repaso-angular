import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Gambit'];
  public deteletedHero?: string;

  removeLastHero(): void {
     this.deteletedHero = this.heroes.pop();
    }
}
