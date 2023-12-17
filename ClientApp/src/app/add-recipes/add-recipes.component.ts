import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent {
  recipe = {
    name: '',
    description: '',
    category:'',
    difficulty: '',
    duration: 0
  };

  onSubmit() {
    // Lógica de manipulação da submissão do formulário aqui
    console.log('Receita enviada:', this.recipe);
    // Você pode enviar a receita para o backend a partir daqui
  }

}
