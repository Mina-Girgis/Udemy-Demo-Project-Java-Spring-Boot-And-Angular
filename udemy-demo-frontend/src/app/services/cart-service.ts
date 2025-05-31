import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "../intercace/cart-item";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getToken } from "../intercace/jwt-payload";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any> {
    const token:string = getToken()||"";    
    const baseUrl = `http://localhost:8080/api/v1/carts/`;
    const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    return this.http.get(`${baseUrl}`,{headers});
  }

  addToCart(courseId:string ) {
    const token:string = getToken()||"";    
    const baseUrl = `http://localhost:8080/api/v1/carts/course/${courseId}`;
    const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    return this.http.post(baseUrl,{},{headers});
  };

  removeFromCart(itemId: string){
    const token:string = getToken()||"";    
    const baseUrl = `http://localhost:8080/api/v1/carts/${itemId}`;
    console.log(baseUrl);
    const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    return this.http.delete(baseUrl,{headers});
  }

  checkOut(){
    const token:string = getToken()||""; 
    const baseUrl = `http://localhost:8080/api/v1/carts/buy`;
    console.log(baseUrl);
    const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    return this.http.post(baseUrl,{},{headers});
  }

  clearCart(): void {
    // this.cartItems = [];
    // this.cartItemsSubject.next([...this.cartItems]);
  }

  getTotalPrice(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => total + (+item.price) * (+item.quantity), 0);
  }
}