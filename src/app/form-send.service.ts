import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface User {
  name: string;
  email: string;
  feedback: string;
  comment: string;
}

export class data {
  name: string;
  email: string;
  feedback: string;
  comment: string;

  constructor() { 
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormSendService {

  constructor(private http : HttpClient) { }
  getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  getFormdata() {
    return this.http.get<User>(this.getUrl);
  }

  postFormdata(user: data) {
    //console.log("in here");
    return this.http.post(this.postUrl, user);
  }
}
