import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ItemHeaderComponent } from "./item-header/item-header.component";
import { ItemSidebarComponent } from "./item-sidebar/item-sidebar.component";
import { ItemContentComponent } from "./item-content/item-content.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemModel } from '../intercace/item-model';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-item-details',
  standalone:true,
  imports: [CommonModule,CardModule, RatingModule, AvatarModule, ToolbarModule, ItemHeaderComponent, ItemSidebarComponent, ItemContentComponent],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{

  item?:ItemModel;

  constructor(private router: Router,private route: ActivatedRoute,private dataService:DataService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {      
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Scrolls to top on every route change
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item = this.dataService.getCourseById(id);
    }






  }
}
