import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpc : HttpClient) { }

  public url = 'http://localhost:3000/post';
  sendData(data){
    return this._httpc.post<any>(this.url,data);
  }
}
