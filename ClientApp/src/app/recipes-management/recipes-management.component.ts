import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-recipes-management',
  templateUrl: './recipes-management.component.html',
  styleUrls: ['./recipes-management.component.css']
})
export class RecipesManagementComponent implements OnInit {
  recipes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Erro ao obter receitas:', error);
      }
    );
  }
}
