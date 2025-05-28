import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CartItem } from "../intercace/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartMapperService {

    mapToCartItem(response:any):CartItem{
        return {
            id:response.Id,
            courseId:response.Course.Id,
            title:response.Course.Title,
            rating:response.Course.Rating,
            price:response.Course.Price,
            quantity:'1',
            instructor:"",
            thumbnail:response.Course.ImageUrl,
        }



    }

}