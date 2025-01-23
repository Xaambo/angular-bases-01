import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Primera app de Angular';
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
