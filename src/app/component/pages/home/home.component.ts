import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //defining the blank array
  foods:Food[]=[];

  constructor(private api:FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        foodsObservable=this.api.getAllFoodBySearchTerm(params.searchTerm)
      else
      foodsObservable = api.getAll() //sample foods of data return
    foodsObservable.subscribe((serverFoods)=>{
      this.foods=serverFoods;
    })

    })
  }


  ngOnInit(): void {


  }

}
