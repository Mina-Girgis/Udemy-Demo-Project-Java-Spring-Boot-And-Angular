import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../intercace/cart-item';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Constants } from '../../constants/constants';
import { extractUserIdToken } from '../../intercace/jwt-payload';

@Component({
  selector: 'app-cart-item',
  standalone:true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input({required:true}) item!: CartItem;
  @Output() deleteItem = new EventEmitter<string>();
  constructor(private messageService: MessageService,private cartService:CartService,private route:Router){}

  get starsArray() {
    const rating = this.item?.rating ? +this.item.rating : 0;
    return new Array(Math.floor(rating));
  }
  

  onTitleClick(){
    this.route.navigate(['/item', this.item.id]);
  }

  removeItem() {
    const userId:string|undefined = extractUserIdToken();
    if(userId == undefined){
      console.log("error");
      return;
    }
    this.cartService.removeFromCart(this.item.id,userId).subscribe({
      next:()=>{
            this.messageService.add({ 
            severity: 'success', 
            summary: 'Item deleted', 
            detail: `${this.item.title} was deleted from your cart.` 
          });
      },
      complete:()=>{
        this.deleteItem.emit(this.item.id);
      },
      error:()=>{
            this.messageService.add({ 
            severity: 'error', 
            summary: 'Error when deleting',  
          });
      },
    });
  }


  
}
