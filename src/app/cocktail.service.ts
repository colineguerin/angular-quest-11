import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cocktails: Array<Cocktail> = [
    {
      name: 'Mojito',
      price: 7,
      image: 'mojito.jpg',
    },
    {
      name: 'Pina Colada',
      price: 8,
      image: 'pinacolada.jpg',
    },
    {
      name: 'White Russian',
      price: 9,
      image: 'whiterussian.jpg',
    },
  ];

  constructor() {}

  getCocktails() {
    return this.cocktails;
  }
}
