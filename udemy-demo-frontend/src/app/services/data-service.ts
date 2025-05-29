
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "../intercace/Course";
import { Observable } from "rxjs";
import { extractUserIdToken } from "../intercace/jwt-payload";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}
    
    getCoursesByCategory(category: string): Observable<Course[]> {  
      const userId:string|undefined = extractUserIdToken();    
      const baseUrl = "http://localhost:8080/api/v1/courses";
      const headers: any = {};
      if (userId) {
        headers['userId'] = userId;
      }
      return this.http.get<Course[]>(`${baseUrl}?category=${category}`,{headers});
    }
    
    getCourseById(id:string){
      const userId:string|undefined = extractUserIdToken();
      console.log(userId);

      const baseUrl = `http://localhost:8080/api/v1/course/${id}`;
      const headers: any = {};
      if (userId) {
        headers['userId'] = userId;
      }
      return this.http.get<Course>(`${baseUrl}`,{headers});
    }


    getMyLearning(){
      const userId:string|undefined = extractUserIdToken();    
      const baseUrl = "http://localhost:8080/api/v1/courses/my-learning";
      const headers: any = {};
      if (userId) {
        headers['userId'] = userId;
      }
      return this.http.get<Course[]>(`${baseUrl}`,{headers});
    }


    getMyFavCourses(){
      const userId:string|undefined = extractUserIdToken();    
      const baseUrl = "http://localhost:8080/api/v1/courses/favourites";
      const headers: any = {};
      if (userId) {
        headers['userId'] = userId;
      }
      return this.http.get<Course[]>(`${baseUrl}`,{headers});
    }


    addFavCourse(courseId:string){
       const userId:string|undefined = extractUserIdToken();    
      const baseUrl = `http://localhost:8080/api/v1/courses/${courseId}/favourites`;
      const headers: any = {};
      if (userId) {
        headers['userId'] = userId;
      }
      return this.http.post<Course[]>(`${baseUrl}`,{},{headers});
    }



}