import { Component, OnInit , Input , EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipies.model';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{

 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 @Input()  recipe! : Recipe;
 @Output() recipeSelected =new EventEmitter();
    constructor() {}
    ngOnInit() {}

  onSelected() {

      this.recipeSelected.emit();
  }
  onRecipeSelected (recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
 }
