import { Recipe } from './recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
