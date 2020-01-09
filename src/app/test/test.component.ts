import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FullnameService } from '../fullname.service';


@Component({
  selector: 'app-test', //<app-test></>
  //.app-test = <div class=app-test>
  //[app-test] = <div app-test>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name="shazad";
public url = window.location.href;
public id  = "attr";
public rdy = true;
public style1 = 'test-success';
public errors = false;
public color = 'orange';
public greets = "";
public val = "";
public user = ""; //module add krna parega app.mosule.ts me FormsModule (import { FormsModule } from '@angular/forms';)
public pass = "";
public fname = ['shazad','shiraz','madhani'];
public date = new Date();
public DI_service_list =[]; //chck service,appmodule for it
public Apitest = {};
//dependency injection https://www.youtube.com/watch?v=69VeYoKzL6I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=19
@Input() public appData;
@Output() public childEvent = new EventEmitter();


public msgclass = {
  "test-success":this.errors,
  "danger":!this.errors,
  "line":this.errors
}
public styleObj = {
  color: "blue",
  fontStyle: "italic"
}
  constructor(private _ServiceList: FullnameService) { }

  ngOnInit() {
    this._ServiceList.getList()
    .subscribe(x => this.DI_service_list = x); // api call

  
  }

  chck(){
    return "Shazad Shiraz";
  }
  greet(event){
    this.greets = "Hi Boys";
    console.log(event);
  }

  getVal(value){
    this.val = value;
  }

  fireEvent(){
    this.childEvent.emit('msg from test componenet');
  }
}
