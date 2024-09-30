import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string = 'Iroman';
  public age: number = 45;

  get capitalizarNombre():string{
    return this.name.toUpperCase();
  }

  getHeroeDescripcion():string{
    return `${ this.name } - ${ this.age }`;
  }

  cambiarNombre():void{
    this.name = 'capitan';
  }

  cambiarEdad():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'Iroman';
    this.age = 45;

    /*
    document.querySelectorAll('h1')!.forEach(element => {
    element.innerHTML = '<h1>Desde Angular</h1>';
    })
    */
  }
}
