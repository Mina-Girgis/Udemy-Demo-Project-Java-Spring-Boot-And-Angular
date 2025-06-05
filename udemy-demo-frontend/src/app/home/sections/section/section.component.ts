import { Component, inject, Input, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CarouselModule } from 'primeng/carousel';
import { Course } from '../../../intercace/Course';
import { DataService } from '../../../services/data-service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-section',
  standalone:true,
  imports: [CarouselModule, ItemComponent,ProgressSpinnerModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit{
  @Input({required:true}) category!:string;
  @Input({required:true}) title!:string;
  isLoading=false;
  courses?:Course[];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.loadCourses();
  }


  loadCourses(){
     this.isLoading=true;
      this.dataService.getCoursesByCategory(this.category).subscribe({
      next: (courses) => {
        console.log(courses);
        this.courses = courses;
      },
      error: (err) => {
        console.error('Error loading courses:', err);
      },
      complete: () => {
        console.log('Course loading finished.');
      }
    });
    this.isLoading=false;
  }

  responsiveOptions = [
    { breakpoint: '1000px', numVisible: 3, numScroll: 1 },
    { breakpoint: '740px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
}
