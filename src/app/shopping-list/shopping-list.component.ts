import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients : Ingredient[]=[
    new Ingredient('Cheeze' , 500),
    new Ingredient('Veggies', 100),
    new Ingredient('Spices', 200)
  ] ;

constructor(){

}
ngOnInit(){

}

}


