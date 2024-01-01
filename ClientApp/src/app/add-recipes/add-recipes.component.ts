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
  recipeData: Recipe = <Recipe>{};
  ingredientsData: Ingredient[] = [];

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

    authorize.getUser().subscribe((result: any) => {
      this.recipeForm.get('userid')?.setValue(result.sub);
    });
  }

  submitForm() {
    if (this.recipeForm.valid) {
      this.http.post<Recipe>(`${this.baseUrl}api/recipes`, this.recipeForm.value).subscribe({
        next: (response) => {
          this.ingredientsArray.controls.forEach(async (value) => {
            value.get('recipeid')?.setValue(response.id);
            await this.http.post<Ingredient>(`${this.baseUrl}api/ingredients`, value.value).toPromise();
          });
          alert("Receita criada com sucesso");
        },
        error: (response) => {
          console.error(response);
        }
      });
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }

  get ingredientsArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredientsArray.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        recipeid: [''],
      })
    );
  }

  removeIngredient(index: number) {
    this.ingredientsArray.removeAt(index);
  }
}


