
import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Course } from "../intercace/Course";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment.dev';
import { HttpService } from "./http-service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private httpService:HttpService) {}
    
    getCoursesByCategory(category: string): Observable<Course[]> {  
      const url = `${environment.api.endpoints.course.getCoursesByCategory}`;
      let params = new HttpParams().append('category', category);
      return this.httpService.get(url,params);
    }
    
    getCourseById(id:string){
      const url = `${environment.api.endpoints.course.getCourseById(id)}`;
      return this.httpService.get<Course>(url);
    }


    getMyLearning(){
      const url = `${environment.api.endpoints.course.getMyCourses}`;
      return this.httpService.get<Course[]>(url);
    }


    getMyFavCourses(){
      const url = `${environment.api.endpoints.course.getMyFav}`;
      return this.httpService.get<Course[]>(url);
    }

    
    addFavCourse(courseId:string){
      const url = `${environment.api.endpoints.course.addFavCourse(courseId)}`;
      return this.httpService.post(url);
    }



}