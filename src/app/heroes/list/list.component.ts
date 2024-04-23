import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string [] = ['Spiderman','Hulk','Ironman','Thor'];

  public deleteHero?:string;
  removeLasHeroe():void{
    this.deleteHero = this.heroName.pop();
  }


}
