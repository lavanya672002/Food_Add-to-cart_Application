import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/model/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  //return the data from the data.ts

  getAll():Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOODS_URL)
  }
  //search food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL +searchTerm)
  }
  //get all tags
  // getAllTags():Tag[]{
  //   return sample_tags
  // }

  //get food by id
  getFoodById(foodId:string):Observable<Food>{
    return this.httpClient.get<Food>(FOODS_BY_ID_URL +foodId)
  }
}
