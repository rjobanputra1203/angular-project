import { Component } from '@angular/core';
import { Recipe } from './recipies.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipe!: Recipe;
  ngOnInit() {
console.log(this.selectedRecipe)
  }
}

