import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { GuestOnlyGuard } from './guards/guest-only-guard';

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
    canActivate:[GuestOnlyGuard],
    loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
  },
  { 
    path: 'login',
    canActivate:[GuestOnlyGuard],
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'courses',
    loadComponent: () => import('./view-courses/view-courses.component').then(m => m.ViewCoursesComponent)
  },
];
