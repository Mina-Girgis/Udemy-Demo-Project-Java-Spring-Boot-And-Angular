import { Component } from '@angular/core';
import { SectionComponent } from './section/section.component';


@Component({
  selector: 'app-sections',
  standalone:true,
  imports: [SectionComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  data:{title:string,category:string}[]=[
    {
      title:"Recommend For You",
      category:"Development",
    },
    {
      title:"Business",
      category:"Business",
    },
    {
      title:"Finance",
      category:"Finance",
    }
    
  ];

}