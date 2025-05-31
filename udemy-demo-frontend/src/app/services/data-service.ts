
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "../intercace/Course";
import { Observable } from "rxjs";
import { extractUserIdToken, getToken } from "../intercace/jwt-payload";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}
    
    getCoursesByCategory(category: string): Observable<Course[]> {  
      const token:string = getToken()||"";    
      const baseUrl = "http://localhost:8080/api/v1/courses";
      let headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return this.http.get<Course[]>(`${baseUrl}?category=${category}`,{headers});
    }
    
    getCourseById(id:string){
      const token:string = getToken()||"";    
      const baseUrl = `http://localhost:8080/api/v1/course/${id}`;
      const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return this.http.get<Course>(`${baseUrl}`,{headers});
    }


    getMyLearning(){
      const token:string = getToken()||"";    
      console.log(token);
      const baseUrl = "http://localhost:8080/api/v1/courses/my-learning";
      const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return this.http.get<Course[]>(`${baseUrl}`,{headers});
    }


    getMyFavCourses(){
      const token:string = getToken()||"";    
      const baseUrl = "http://localhost:8080/api/v1/courses/favourites";
      const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return this.http.get<Course[]>(`${baseUrl}`,{headers,});
    }

    
    addFavCourse(courseId:string){
      const token:string = getToken()||"";    
      const baseUrl = `http://localhost:8080/api/v1/courses/${courseId}/favourites`;
      const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return this.http.post<Course[]>(`${baseUrl}`,{},{headers});
    }



}