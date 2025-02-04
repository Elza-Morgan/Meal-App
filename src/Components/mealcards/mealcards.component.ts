import { Component, Input, OnChanges } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { MealtabsComponent } from "../mealtabs/mealtabs.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mealcards',
  imports: [CommonModule],
  templateUrl: './mealcards.component.html',
  styleUrl: './mealcards.component.scss'
})
export class MealcardsComponent {

  @Input() cat!:string;
  mealsByCategory!:any[];

  constructor(private _http:HttpClient) {}

  //if no category isn't detected by default it will show all
  getCategoryMeals():Observable<any>{
    //handling when choosing all from category to all
    if(this.cat.toLowerCase() === 'all'){
      return this._http.get('https://themealdb.com/api/json/v1/1/search.php?s=');
    }
    return this._http.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${this.cat}`);

  }

  ngOnChanges(): void {
    console.log(this.cat);
    this.getCategoryMeals().subscribe({
      next: (res) => {
        this.mealsByCategory = res.meals;
        console.log(this.mealsByCategory)
      }
    })
  }

}
