import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: 'cart', component: CartComponent },
];
