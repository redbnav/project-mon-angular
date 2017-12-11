import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'nr-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Schnitzel', 'Very tasty', 'https://thumb7.shutterstock.com/display_pic_with_logo/324901/482743804/stock-photo-schnitzel-and-fried-potatoes-on-dark-plate-top-view-482743804.jpg', []),
  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
];

@Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
