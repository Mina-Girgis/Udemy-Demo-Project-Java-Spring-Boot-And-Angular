import { Injectable } from "@angular/core";
import { User } from "../intercace/user";
import { environment } from '../../environments/environment.dev';
import { HttpService } from "./http-service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpService: HttpService) {}

    signUp(user:User){
      const url = `${environment.api.endpoints.user.createNewUser}`;
      return this.httpService.post(url,{
          "FirstName":user.firstName,
          "LastName": user.lastName,
          "Email": user.email,
          "Password": user.password
      });
    }


    login(email:string,password:string){
      const url = `${environment.api.endpoints.user.login}`;
      return this.httpService.post(url,{
          "Email": email,
          "Password": password
      });
    }

}