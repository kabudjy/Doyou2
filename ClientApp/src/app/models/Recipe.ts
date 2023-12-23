import { Ingredient } from "./Ingredient"

export interface Recipe {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  category: number;
  duration: string;
  userid: string;
  ingredients: Ingredient[];
}
