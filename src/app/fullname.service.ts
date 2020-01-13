import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './emp';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FullnameService {

  private _url: string="/assets/data.json";
  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get<IEmployee[]>('https://jsonplaceholder.typicode.com/posts');
                                    
  }
  errorHandler(error: HttpErrorResponse){

  }

}
