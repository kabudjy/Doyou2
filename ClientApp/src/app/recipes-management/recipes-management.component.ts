import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipes-management',
  templateUrl: './recipes-management.component.html',
  styleUrls: ['./recipes-management.component.css']
})
export class RecipesManagementComponent implements OnInit {
  recipes: any[] = [];
  editedRecipe: any = null;
  difficultyMap: any = {
    0: 'Fácil',
    1: 'Média',
    2: 'Difícil'
  };

  categoryMap: any = {
    0: 'Entradas',
    1: 'Carne',
    2: 'Peixe',
    3: 'Sobremesa'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe(
      (data: any[]) => {
        this.recipes = data.map(recipe => ({
          ...recipe, showDetails: false,
          difficultyString: this.difficultyMap[recipe.difficulty],
          categoryString: this.categoryMap[recipe.category]
        }));
      },
      (error) => {
        console.error('Erro ao obter receitas:', error);
      }
    );
  }

  showDetails(recipe: any): void {
    recipe.showDetails = !recipe.showDetails;
  }

  toggleDetails(recipe: any): void {
    recipe.showDetails = !recipe.showDetails;
  }

  editRecipe(recipe: any): void {
    this.editedRecipe = { ...recipe };
  }

  cancelEdit(): void {
    this.editedRecipe = null;
  }

  saveEditedRecipe(): void {
    if (this.editedRecipe) {
      this.apiService.updateRecipe(this.editedRecipe.id, this.editedRecipe).subscribe(
        () => {
          this.getRecipes();
          this.editedRecipe = null;
        },
        (error) => {
          console.error('Erro ao salvar a receita editada:', error);
        }
      );
    }
  }
}
