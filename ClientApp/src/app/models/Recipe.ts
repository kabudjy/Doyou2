import { Ingredient } from "./Ingredient"


export enum Difficulty {
  Fácil = 0,
  Médio = 1,
  Difícil = 2,
}

export enum Category {
  Entradas = 0,
  Carne = 1,
  Peixe = 2,
  Sobremesa = 3,
}
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
