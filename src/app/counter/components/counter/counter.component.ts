import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
  <h3> Contador: {{counter}}</h3>
  <button (click)="incrementaPorUno(1)">+1</button>
  <button (click)="resetValue(10)">Reset</button>
  <button (click)="decrementaPorUno(1)">-1</button>
  `
})
export class CounterComponent{
  public title:String = 'Hola mundo';
  public counter:number = 10;

  incrementaPorUno(value:number):void{
    this.counter = this.counter + value;
  }
  decrementaPorUno(value:number):void{
    this.counter = this.counter - value;
  }
  resetValue(value:number):void{
    this.counter =  value;
  }
}
