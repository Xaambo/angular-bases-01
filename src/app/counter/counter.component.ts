import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `<h1>Hola Counter</h1>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="addOne()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="minusOne()">-1</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  public addOne(): void {
    this.counter += 1;
  }
  public minusOne(): void {
    this.counter -= 1;
  }
  public reset(): void {
    this.counter = 10;
  }
}
