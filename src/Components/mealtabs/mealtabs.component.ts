import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mealtabs',
  imports: [],
  templateUrl: './mealtabs.component.html',
  styleUrl: './mealtabs.component.scss'
})
export class MealtabsComponent {

  mealsCat!:any[];
  links!:any;

  @Output() selectCat = new EventEmitter<string>();

  constructor(private _http:HttpClient){}

  getAllMealsCat():Observable<any>{
    return this._http.get(`https://themealdb.com/api/json/v1/1/categories.php`);
  }

  ngOnInit(): void {
    this.getAllMealsCat().subscribe({
      next: (res) =>{console.log(res.categories)
       this.mealsCat=res.categories;
      }, 
      error:(err) => console.log(err)
    })
    
  }

  onCategoryClick(event: Event, category: string): void {
    event.preventDefault();
    
    this.selectCat.emit(category);

    this.links = document.querySelectorAll('.tabs li');
    this.links.forEach((link:HTMLElement) => link.classList.remove('active'));

  
    const clickedItem = (event.target as HTMLElement).closest('li');
    if (clickedItem) {
      clickedItem.classList.add('active'); 
    }
}
}


