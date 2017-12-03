import { appendNgContent } from '@angular/core/src/view/ng_content';
import { Component } from '@angular/core';
import { TreeError } from '@angular/compiler/src/ml_parser/parser';

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular app';
}
