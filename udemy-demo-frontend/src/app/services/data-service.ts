
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "../intercace/Course";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    getCoursesByCategory(category: string): Observable<Course[]> {      
      const baseUrl = "http://localhost:8080/api/v1/courses";
      return this.http.get<Course[]>(`${baseUrl}?category=${category}`);
    }
    
    getCourseById(id:string){
      const baseUrl = `http://localhost:8080/api/v1/course/${id}`;
      return this.http.get<Course>(`${baseUrl}`);
    }



}