import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  searchTerm: string = '';
  recipes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRecipes().subscribe(
      (result) => {
        this.recipes = result;
      },
      (error) => {
        console.error('Erro ao obter dados da API:', error);
      }
    );
  }


  searchRecipes() {
    this.apiService.searchRecipes(this.searchTerm).subscribe(
      (result) => {
        this.recipes = result;
      },
      (error) => {
        console.error('Erro ao obter dados da API:', error);
      }
    );
  }
}
