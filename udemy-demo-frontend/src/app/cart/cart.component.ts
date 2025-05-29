import { Component, OnChanges, OnInit } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartItem } from '../intercace/cart-item';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../services/cart-service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CurrencyPipe } from '@angular/common';
import { CartMapperService } from '../services/cart-mapper-service';
import { Constants } from '../constants/constants';
import { extractUserIdToken } from '../intercace/jwt-payload';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CartItemComponent,ButtonModule,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  private cartSubscription!: Subscription;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartMapperService:CartMapperService,private cartService: CartService,private messageService: MessageService) {}


  ngOnInit(): void {
    const userId:string|undefined = extractUserIdToken();
    if(userId == undefined){
      console.log("error");
      return;
    }
    this.cartSubscription = this.cartService.getCartItems(userId).subscribe({
        next:(data:any)=>{
            this.cartItems = data.CartItems.map((item:any)=>this.cartMapperService.mapToCartItem(item))
             this.changeTotalPrice();
        },
        complete:()=>{},
        error:(err)=>{
          console.log(err);
          
        },
      }
      );
  }

  onDeleteItem(itemId:string){
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    
  }

  ngAfterViewChecked(): void {
    this.changeTotalPrice();
  }

  changeTotalPrice(){
    this.totalPrice = this.cartService.getTotalPrice(this.cartItems);
  }

  onCheckOut(){
    console.log("CHECK_OUT");
    const userId:string|undefined = extractUserIdToken();
    if(userId == undefined){
      console.log("error");
      return;
    }
    this.cartService.checkOut(userId).subscribe({
      next:()=>{
        this.cartItems=[]; 
        this.messageService.add({ 
            severity: 'success', 
            summary: 'checkout completed',  
          });
      },
      complete:()=>{
        this.cartItems=[];
      },
      error:()=>{},
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

}
