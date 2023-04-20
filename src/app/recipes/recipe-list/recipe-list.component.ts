import { Component } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipies : Recipe[] = [
    new Recipe('Pizza', 'This is a test case','https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=2048x2048&w=gi&k=20&c=49Bggu_EPwzVsFZJ9iyZMmsWFSv0kHWL8hW3dYaGw9I='),
    
      new Recipe('Pizza', 'This is a test case', 'https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=2048x2048&w=gi&k=20&c=49Bggu_EPwzVsFZJ9iyZMmsWFSv0kHWL8hW3dYaGw9I=')
  ];
  constructor() {

  }

  ngOnInit() {

  }

}
