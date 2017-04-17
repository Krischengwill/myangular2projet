import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'app-lfg',
  templateUrl: './lfg.component.html',
  styleUrls: ['./lfg.component.css']
})
export class LFGComponent implements OnInit {

  game:any;
  type:any;
  match:any;
  time:any;
  short:any;
  constructor(public httpService: HttpService) { }
 

  ngOnInit() {
  }
getFormData(){
  	this.httpService.postFunc({game: this.game, type:this.type, match:this.match, time:this.time, short:this.short}).subscribe(
  			(res: Response) => console.log(res));
           this.game = this.type = this.match= this.time= this.short= "";
  	
  }
 
}


