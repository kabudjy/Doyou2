import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent {
  recipeForm: FormGroup;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private authorize: AuthorizeService,
    private formBuilder: FormBuilder
  ) {
    this.recipeForm = this.formBuilder.group({
      id: [''],
      userid: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
    });

    this.authorize.getUser().subscribe((result: any) => {
      if (result && result.sub) {
        this.recipeForm.get('userid')?.setValue(result.sub);
      }
    });
  }

  get ingredientsArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  submitForm() {
    this.http.post<Recipe>(`${this.baseUrl}api/recipes`, this.recipeForm.value).subscribe({
      next: (response) => {
        this.ingredientsArray.controls.forEach(async (control) => {
          control.get('recipeid')?.setValue(response.id);
          await this.http.post<Ingredient>(`${this.baseUrl}api/ingredients`, control.value).toPromise();
        });
        alert('Receita criada com sucesso');
      },
      error: (response) => {
        console.error(response);
      }
    });
  }

  addIngredient() {
    this.ingredientsArray.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        recipeid: [''], // This will be set dynamically in submitForm
      })
    );
  }

  removeIngredient(index: number) {
    this.ingredientsArray.removeAt(index);
  }
  }

