import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor'];
  public deleteHero?: string;

  removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }

}
