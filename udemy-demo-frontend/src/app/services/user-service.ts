import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../intercace/user";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}

    signUp(user:User){
      const baseUrl = "http://localhost:8080/api/v1/user";
      return this.http.post(`${baseUrl}`,{
          "FirstName":user.firstName,
          "LastName": user.lastName,
          "Email": user.email,
          "Password": user.password
      });
    }


    login(email:string,password:string){
      console.log("HERE",email,password);
      
      const baseUrl = "http://localhost:8080/api/v1/user/login";
      return this.http.post(`${baseUrl}`,{
          "Email": email,
          "Password": password
      });
    }

}