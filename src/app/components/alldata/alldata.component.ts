import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Response, Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AllDataComponent implements OnInit {
items:any = [];
 
  constructor(public httpService:HttpService) { }
 
  ngOnInit() {
  		this.httpService.getFunc().subscribe(
  				data => {
  			const myArr = [];
  			const itemKey = [];
  			for(let key in data){
  				myArr.push(data[key]);
  				itemKey.push(key);
  			}
  			this.items = myArr;
 	
  		}
  			)
  }
 
}

//comment get function
