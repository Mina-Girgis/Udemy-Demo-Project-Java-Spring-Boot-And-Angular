import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../intercace/user";

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

}