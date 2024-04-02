import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './../style-components.css'
})
export class CardComponent {

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required');
  }

}
