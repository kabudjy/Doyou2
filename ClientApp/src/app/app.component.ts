import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  searchTerm: string = '';

  searchRecipes() {
    // Adicione lógica para lidar com a pesquisa aqui
    console.log('Pesquisar por:', this.searchTerm);
}


}
