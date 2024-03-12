import { Component, OnInit } from '@angular/core';
import '../../../app.component'

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}} </h2>

<button (click)="increaseBy(true)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(false)">-1</button>
  `
})

export class CounterComponent {

  constructor() {

   }

  public counter: number = 10;

  increaseBy(value: boolean):void {
    if (value)
      this.counter +=1;
    else
      this.counter -=1;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
