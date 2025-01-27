import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/model/Food';
import { CartItem } from '../shared/model/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  constructor() { }
  //add to cart method
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(food))
    this.setCartLocalStorage();
  }

  //remove cart item
  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.setCartLocalStorage();

  }

  //change quantity
  chnageQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem)
      return;

    cartItem.quantity=quantity;
    cartItem.price=quantity*cartItem.price;
    this.setCartLocalStorage();

  }

  //clear cart

  claerCart(){
    this.cart=new Cart();
    this.setCartLocalStorage();

  }

  //get cart Observable meancheck Observable data
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  //now set the localstorage data
  private setCartLocalStorage():void{
    this.cart.totalPrice=this.cart.items.reduce((prevSum, currentItem)=>
      prevSum+currentItem.price,0);
    this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=>
    prevSum+currentItem.quantity,0)

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart)
  }
//when ever set the local storage data then alse get data

private getCartFromLocalStorage():Cart{
  const cartJson = localStorage.getItem('Cart');
  return cartJson?JSON.parse(cartJson):new Cart();
}
}
