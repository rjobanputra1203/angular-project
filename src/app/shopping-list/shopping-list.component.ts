import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
// import { json } from 'stream/consumers';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [];

  constructor() {

  }
  ngOnInit() {
   this.ingredients=JSON.parse(localStorage.getItem("item"))
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient)
    // this.ingredients.push(ingredient)
    // const Item = JSON.stringify(ingredient)
    // localStorage.setItem("Item", Item)
    // const newItem = localStorage.getItem("Item")
    // let a = JSON.parse(newItem)
    // this.ingredients = [...a,ingredient]
    
    this.ingredients.push(ingredient)
    const i = JSON.stringify(this.ingredients)
    localStorage.setItem("item",i)
   
  }

}


