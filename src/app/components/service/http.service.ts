import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class HttpService {
  constructor(public http: Http) { }
 
  postFunc(postData:any){
  		const body = JSON.stringify(postData);
  		const headers = new Headers();
  		headers.append("Content-Type", "application/json");
  	
  	return this.http.post("https://finalproject-b0de6.firebaseio.com/listings/LFG/listings/data.json", body, {headers: headers}).map((response:Response) => response.json());
  }
  getFunc(){
  	return this.http.get("https://finalproject-b0de6.firebaseio.com/listings/LFG/listings/data.json").map((res: Response)=> res.json());
  }

}