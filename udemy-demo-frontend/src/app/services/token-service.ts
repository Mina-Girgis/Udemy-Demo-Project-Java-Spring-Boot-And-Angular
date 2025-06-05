import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService{
    private TOKEN:string = "token";
    saveToken(token:string){
        localStorage.setItem(this.TOKEN, token);
    }

    deleteToken(){
        localStorage.removeItem(this.TOKEN);
    }

    getToken(){
        return localStorage.getItem(this.TOKEN)||"";
    }

    verifyToken(token:string){
        if (!token) return false;
        try {
            const payloadBase64 = token.split('.')[1];
            const payloadJson = atob(payloadBase64);
            const payload = JSON.parse(payloadJson);
            const currentTime = Math.floor(Date.now() / 1000);
            return payload.exp && payload.exp > currentTime;
        } catch (e) {
            console.error('Invalid token format', e);
            return false;
        }
    }

}