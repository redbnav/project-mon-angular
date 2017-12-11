import { Ingredient } from '../shopping-list/ingredient';
export class Recipe {
    constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {}
}
