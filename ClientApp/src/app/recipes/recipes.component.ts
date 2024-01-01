import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Recipe, Difficulty, Category } from '../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  searchTerm: string = '';
  recipes: Recipe[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getRecipes()?.subscribe(
      (result: Recipe[]) => {
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

  getDifficultyString(difficulty: Difficulty): string {
    return Difficulty[difficulty];
  }

  getCategoryString(category: Category): string {
    return Category[category];
  }

  showDetails(recipe: any): void {
    recipe.showDetails = !recipe.showDetails;
  }
}
