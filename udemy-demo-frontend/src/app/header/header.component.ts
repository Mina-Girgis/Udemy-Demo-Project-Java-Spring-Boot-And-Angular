import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { Constants } from '../constants/constants';

@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ToolbarModule, InputTextModule, ButtonModule, AvatarModule, TooltipModule,OverlayPanelModule],
})
export class HeaderComponent {
constructor(private router: Router) {}
  @ViewChild('overlay') overlayPanel!: OverlayPanel  
  isLoading = false;
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  onClick(){
    this.router.navigate(['/cart']);
    this.overlayPanel.hide();
  }

  onLogoClicked(){
     this.router.navigate(['/home']);
     this.overlayPanel.hide();
  }

  navigateToSignUp(){
     this.router.navigate(['/signup']);
     this.overlayPanel.hide();
  }

  navigateToSignIn(){
    this.router.navigate(['/login']);
    this.overlayPanel.hide();
  }

  onClickMyLearning(){
    this.router.navigate(['/courses'],{ queryParams: { category: Constants.MY_LEARNING } });
    this.overlayPanel.hide();
  }

  onFavClicked(){
     this.router.navigate(['/courses'],{ queryParams: { category: Constants.FAV } });
    this.overlayPanel.hide();
  }

  logout(){
    this.isLoading=true;
    localStorage.removeItem('token');
    this.router.navigate(['/home']).then(()=>{
      location.reload();
    });
    this.isLoading=false;
  }
} 
