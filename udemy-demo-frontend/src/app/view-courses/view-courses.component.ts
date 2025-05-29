import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ItemComponent } from "../home/sections/item/item.component";
import { Constants } from '../constants/constants';
import { Course } from '../intercace/Course';
import { DataService } from '../services/data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-courses',
  standalone:true,
  imports: [ItemComponent],
  templateUrl: './view-courses.component.html',
  styleUrl: './view-courses.component.css'
})
export class ViewCoursesComponent implements OnInit {
  constructor(private route:ActivatedRoute,private dataService:DataService){}

  courses?:Course[];
  category!:string;
  ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.loadCourses();
    });
    
  }

  loadCourses(){

    if(this.category===Constants.MY_LEARNING){
      this.category="My Learning";
      this.dataService.getMyLearning().subscribe((response)=>{
        this.courses = response;
      });
    }
    else if(this.category===Constants.FAV){
      this.category="Favorites";
      this.dataService.getMyFavCourses().subscribe((response)=>{
        this.courses = response;
      });
    }
    else{
      this.dataService.getCoursesByCategory(this.category).subscribe((response)=>{
        this.courses = response;
      });
    }
  }

}
