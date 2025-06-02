import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { 
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'item/:id',
    loadComponent: () => import('./item-details/item-details.component').then(m => m.ItemDetailsComponent)
  },
  { 
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
  },
  { 
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'courses',
    loadComponent: () => import('./view-courses/view-courses.component').then(m => m.ViewCoursesComponent)
  },
];
