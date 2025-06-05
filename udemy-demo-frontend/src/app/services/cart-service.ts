import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "../intercace/cart-item";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpService } from "./http-service";
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService:HttpService,private http: HttpClient) {}

  getCartItems(): Observable<any> {
    const url = `${environment.api.endpoints.cart.getCart}`;
    return this.httpService.get(url);
  }

  addToCart(courseId:string ) {
    const url = `${environment.api.endpoints.cart.addToCart(courseId)}`;
    return this.httpService.post(url,{},{} as HttpHeaders);
   
  };

  removeFromCart(itemId: string){
    const url = `${environment.api.endpoints.cart.removeFromCart(itemId)}`;
    return this.httpService.delete(url);
  }

  checkOut(){
    const url = `${environment.api.endpoints.cart.buyNow}`;
    return this.httpService.post(url,{},{} as HttpHeaders);
  }

  clearCart(): void {
  }

  getTotalPrice(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => total + (+item.price) * (+item.quantity), 0);
  }
}