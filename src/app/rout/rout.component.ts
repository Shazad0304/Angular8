import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router'

@Component({
  selector: 'app-rout',
  templateUrl: './rout.component.html',
  styleUrls: ['./rout.component.css']
})
export class RoutComponent implements OnInit {
public id;
public message = '';
  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    //this.id = parseInt(this.rout.snapshot.paramMap.get('id'))
    //second option becoz back jane per ng Onit nahi chlta
    this.rout.paramMap.subscribe((params: ParamMap)=>this.id = parseInt(params.get('id')));
    if(this.id > 0){
        this.message = 'The id is ' + this.id;
    }
  }

}
