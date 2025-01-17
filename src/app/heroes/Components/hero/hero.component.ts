import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizatedName(): string {
    return 'xd'.toUpperCase();
  }

  getHeroDesc(): string {
    return ` ${this.name} - ${this.age}`;
  }

  changerHero(): void {
    this.name = 'pepeman';
  }

  changeAge(): void {
    this.age = 10;
  }
}
