import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CartItem } from "../intercace/cart-item";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getCartItems(userId:string): Observable<any> {
    const baseUrl = `http://localhost:8080/api/v1/carts/${userId}`;
    return this.http.get(`${baseUrl}`);
  }

  addToCart(courseId:string,userId:string ) {
    const baseUrl = `http://localhost:8080/api/v1/carts/course/${courseId}`;
    const headers = new HttpHeaders({
    'userId': userId
    });
    return this.http.post(baseUrl,{},{ headers });
  };

  removeFromCart(itemId: string,userId:string){
    const baseUrl = `http://localhost:8080/api/v1/carts/${itemId}`;
    console.log(baseUrl);
    
     const headers = new HttpHeaders({
        'userId': userId
    });
    return this.http.delete(baseUrl,{ headers });
  }

  checkOut(userId:string){
    const baseUrl = `http://localhost:8080/api/v1/carts/buy`;
    console.log(baseUrl);
    return this.http.post(baseUrl,{},{headers:{userId:userId}});
  }

  clearCart(): void {
    // this.cartItems = [];
    // this.cartItemsSubject.next([...this.cartItems]);
  }

  getTotalPrice(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => total + (+item.price) * (+item.quantity), 0);
  }
}