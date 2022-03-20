import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RecipeService {
    constructor(private http: HttpClient) { }

    getRecipes() {
        return this.http.get("https://api.spoonacular.com/recipes/random?number=10&apiKey=932b0d502caa4cd1af71629ce2027ce8")
    }

    getRecipeDetail(id: number) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=932b0d502caa4cd1af71629ce2027ce8`)
    }

    searchRecipes(search_query: string) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search_query}&number=10&apiKey=932b0d502caa4cd1af71629ce2027ce8`)
    }

    typeSearch(type: string) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?type=${type}&number=10&apiKey=932b0d502caa4cd1af71629ce2027ce8`)
    }
}
// second api key
//
// fbf5d2d2938f4cf982542e80da0747f3