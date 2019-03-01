import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Paneer','Indian','https://upload.wikimedia.org/wikipedia/commons/f/f9/Panir_Tikka_Indian_cheese_grilled.jpg')
    ,
    new Recipe('Paneer','Mexican','https://upload.wikimedia.org/wikipedia/commons/f/f9/Panir_Tikka_Indian_cheese_grilled.jpg')
  ];
  @Output() resipe=new EventEmitter<Recipe>();
  onrecipeselect(r:Recipe)
  { 
    this.resipe.emit(r);
    console.log(r);

  };
  constructor() { }

  ngOnInit() {
  }

}
