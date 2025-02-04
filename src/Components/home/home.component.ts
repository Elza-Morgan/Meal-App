import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealtabsComponent } from "../mealtabs/mealtabs.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealcardsComponent } from "../mealcards/mealcards.component";

@Component({
  selector: 'app-home',
  imports: [MealtabsComponent, MealcardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mealsByCategory!:any[];
  //that's from the category tabs like beef, chicken, etc.
  currentCat: string = 'All';

  constructor(private _http:HttpClient) {
    console.log(this.currentCat);
  }

  handleSelectedCat(category:string) {
    // Captured the category
    // Pass the category to mealcards component.
    this.currentCat = category;
    console.log(this.currentCat);
  }

}
