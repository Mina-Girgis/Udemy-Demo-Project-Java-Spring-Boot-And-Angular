import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CartItem } from "../intercace/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Internal cart items state
  private cartItems: CartItem[] = [];

  // Observable cart stream
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject(this.cartItems);

  constructor() {}

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(item: CartItem): void {
    const index = this.cartItems.findIndex(i => i.id === item.id);

    if (index === -1) {
      this.cartItems.push(item);
    } else {
      // Increase quantity if item exists
    //   this.cartItems[index].quantity += item.quantity;
    }

    this.cartItemsSubject.next([...this.cartItems]);
  }


  removeFromCart(itemId: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (+item.price) * (+item.quantity), 0);
  }
}