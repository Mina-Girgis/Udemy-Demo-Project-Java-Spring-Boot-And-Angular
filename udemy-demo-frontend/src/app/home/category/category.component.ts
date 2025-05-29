import { Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone:true,
  imports: [TieredMenuModule, ToolbarModule, InputTextModule, ButtonModule, AvatarModule, TooltipModule,OverlayPanelModule],
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private router: Router) {}
  
  menuItems = [
    {
      label: 'Development',
      items: [
        { label: 'Web Development' },
        { label: 'Data Science' },
        { label: 'Mobile Apps' }
      ]
    },
    {
      label: 'Design',
      items: [
        { label: 'Graphic Design' },
        { label: 'UX/UI' }
      ]
    }
  ];


  onCategoryClicked(category:String){
    this.router.navigate(['/courses'],{ queryParams: { category } });
  }
}
