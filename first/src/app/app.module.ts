import { ActivationEnd } from '@angular/router/src/events';
import { Action } from 'rxjs/scheduler/Action';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

var model = { 
  user: "Naveen",
  items: [
    {action: "Explore Angular", done: true },
    {action: "CRUD using Angular", done: false},
    {actons: "Events in Angular", done: true},
    {action: "commit it git repo", done: true}]
  }