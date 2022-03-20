import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) { }

  types = ["Dessert", "Drink", "Snack"];
  search_query: string = ""
  response: any;

  ngOnInit(): void {
    this.getRecipes()
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/recipe/" + id)
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(data => {
      // @ts-ignore
      this.response = data?.recipes
    })
  }

  typeSearch(type: string) {
    this.response = []
    this.recipeService.typeSearch(type).subscribe((data) => {
      // @ts-ignore
      this.response = data?.results

    })
  }

  searchRecipes() {
    this.response = []
    if (this.search_query.length > 3) {
      setTimeout(() => {
        this.response = []
        this.recipeService.searchRecipes(this.search_query).subscribe((data) => {
          // @ts-ignore
          this.response = data?.results
        })
      }, 1000);
    } else if (this.search_query.length == 0) {
      this.getRecipes()
    } else {
      return;
    }
  }
}
