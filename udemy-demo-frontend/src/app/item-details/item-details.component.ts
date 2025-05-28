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
import { DataService } from '../services/data-service';
import { Course } from '../intercace/Course';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-details',
  standalone:true,
  imports: [ProgressSpinnerModule,CommonModule,CardModule, RatingModule, AvatarModule, ToolbarModule, ItemHeaderComponent, ItemSidebarComponent, ItemContentComponent],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{

  item?:Course;
  isLodaing = false;
  constructor(private messageService: MessageService,private router: Router,private route: ActivatedRoute,private dataService:DataService) {}

  ngOnInit() {
    this.isLodaing=true;
    this.router.events.subscribe((event) => {      
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.loadCourseData(id);
    }
    this.isLodaing=false;
    
  }


  loadCourseData(id:string){
      this.dataService.getCourseById(id).subscribe({
      next: (course) => {
        console.log(course);
        this.item = course;
      },
      error: (err) => {
        this.messageService.add({ 
            severity: 'error', 
            summary: 'Failed to load the course', 
            detail: `` 
        });
      },
      complete: () => {
        console.log('Course loading finished.');
        this.messageService.add({ 
            severity: 'success', 
            summary: 'Course Loaded', 
            detail: `` 
        });
        }
    });
  }

}
