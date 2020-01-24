import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpc : HttpClient) { }

  public url = 'http://localhost:3000/post';
  sendData(data){
    return this._httpc.post<any>(this.url,data)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error)

  }
}
