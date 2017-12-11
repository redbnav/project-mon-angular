import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
  selector: 'nr-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
