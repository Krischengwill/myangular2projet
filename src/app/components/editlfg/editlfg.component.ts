import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-editlfg',
  templateUrl: './editlfg.component.html',
  styleUrls: ['./editlfg.component.css']
})
export class EditlfgComponent implements OnInit {

  id:any;
  listing:any;
  constructor(public httpService: HttpService) { }

  ngOnInit() {
    }

onDeleteClick(){
    this.httpService.deleteListing(this.id);
}
}
//delete  lfg function