import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService, private _location: Location) { }

  recipeDetail: any;

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id
    this.getDetails(id)
  }

  getBack() {
    this._location.back()
  }

  getDetails(id: number) {
    this.recipeService.getRecipeDetail(id).subscribe((data) => {
      this.recipeDetail = data
      console.log(data)
    })
  }

}
