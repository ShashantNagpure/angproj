import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  reshipe:Recipe;
  selectedRecipe(p:Recipe)
  {
    this.reshipe=p;
    console.log(p);
    console.log('chhot');
  };
  constructor() { }

  ngOnInit() {
  }

}
