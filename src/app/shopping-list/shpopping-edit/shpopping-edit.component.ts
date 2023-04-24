import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';


@Component({
  selector: 'app-shpopping-edit',
  templateUrl: './shpopping-edit.component.html',
  styleUrls: ['./shpopping-edit.component.css']
})
export class ShpoppingEditComponent {


  @ViewChild('nameInputRef')
  nameInputRef!: ElementRef;
  @ViewChild('amountInputRef')
  amountInputRef!: ElementRef;
  @Output() ingredientsAdded = new EventEmitter<Ingredient>(); 

onAddItem(event: Event) {
  event.preventDefault()

  const name = this.nameInputRef.nativeElement.value; 
  const amount = this.amountInputRef.nativeElement.value; 
  // const name = "Mango"
  // const amount = 7
  const newIngredient = new Ingredient(name , amount)
  console.log(newIngredient)
  this.ingredientsAdded.emit(newIngredient)  

}


}

