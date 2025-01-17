import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>hola Counter</h1>
  <p>
  counter: {{counter }} xd
  </p>
  <!-- * () sin niguna key indica los eventos que tiene esa etiqueta o tag y solo se llama la fucion sin {{}} -->
  <button (click)="increaseBy()"> + 1 </button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)"> - 1 </button>

  <br>
  <input type="button" value=" +5 " (click)="increaseBy(5)">
  <input type="button" value=" Reset " (click)="reset()">
  <input type="button" value=" -5 " (click)="increaseBy(-5)">
  `,
  standalone: false
})

export class CounterComponent  {
  public counter: number = 10;

  constructor() { }

  increaseBy(value: number = 1): void  {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
