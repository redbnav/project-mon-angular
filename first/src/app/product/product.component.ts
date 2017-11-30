import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
	title = 'Flash Drive 8GB';
	itemCount = 0;

	addItem() {
		this.itemCount++;
	}
}