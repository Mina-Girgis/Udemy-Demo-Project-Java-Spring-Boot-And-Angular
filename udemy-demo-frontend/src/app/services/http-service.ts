import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl = environment.baseUrl;  
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
        // unAuthorized
    }
    return throwError(() => error);
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    console.log(params);
    
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params })
      .pipe(catchError(this.handleError));
  }

  post<T>(endpoint: string, body?: any, headers?:HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body,{headers})
      .pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body)
      .pipe(catchError(this.handleError));
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body)
      .pipe(catchError(this.handleError));
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }

}