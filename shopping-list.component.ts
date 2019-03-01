import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Garam Masala', 5),
    new Ingredient('Butter', 10),
  ];
  addIng(i:Ingredient)
  {
    this.ingredients.push(i);
  }
  constructor() { }

  ngOnInit() {
  }

}
