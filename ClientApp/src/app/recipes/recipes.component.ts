import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    searchTerm: string = '';

  searchRecipes() {
    // Adicione lógica para lidar com a pesquisa aqui
    console.log('Pesquisando receitas por:', this.searchTerm);

  }
}
