import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h1>contador: {{ contador }}</h1>
  <button (click)="increaseBy(+1)">+ 1</button>
  <button (click)="reset()"> Resert</button>
  <button (click)="increaseBy(-1)">- 1</button>
  `,
})
export class CounterComponent{
  public contador: number = 10;

  increaseBy( value:number): void {
    this.contador += value;
  }
  reset(){
    this.contador = 10;
  }


}
