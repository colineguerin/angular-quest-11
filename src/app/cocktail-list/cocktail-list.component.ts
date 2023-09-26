import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../model/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Array<Cocktail> = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
