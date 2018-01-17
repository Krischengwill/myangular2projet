import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
@Injectable()
export class HttpService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  constructor(public http: Http,private af: AngularFire) {
    
     this.listings = this.af.database.list('/listings/LFG/listings/data') as FirebaseListObservable<Listing[]>
  }
 
  postFunc(postData:any){
  		const body = JSON.stringify(postData);
  		const headers = new Headers();
  		headers.append("Content-Type", "application/json");
  	
  	return this.http.post("https://finalproject-b0de6.firebaseio.com/listings/LFG/listings/data.json", body, {headers: headers}).map((response:Response) => response.json());
  }
  getFunc(){
  	return this.http.get("https://finalproject-b0de6.firebaseio.com/listings/LFG/listings/data.json").map((res: Response)=> res.json());
  }

  deleteListing(id){
    this.listing = this.af.database.object('/listings/LFG/listings/data'+id) as FirebaseObjectObservable<Listing>
    return this.listings.remove(id);
  }
}
interface Listing{
  $key?:string;
  game?:string;
  type?:string;
  time?:string;
  match?:string;
  short?:string;
}