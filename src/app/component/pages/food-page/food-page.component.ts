import { CartService } from './../../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';
// import { Router } from 'express';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:Food;

  constructor (activatedRoute:ActivatedRoute, private api:FoodService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
        api.getFoodById(params.id).subscribe(serverFood=>{
      this.food = serverFood;
      })
        // this.food=api.getFoodById(params.id)
    })
  }
  ngOnInit(): void {

  }
  //add to cart button
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
