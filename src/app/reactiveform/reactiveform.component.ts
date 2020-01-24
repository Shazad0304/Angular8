import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms'; long code
import {FormBuilder, Validators, FormArray, Form} from '@angular/forms' // short code
import {forbiddenvali,matchPass} from './Shared/validator'



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
/*
  registrationForm = new FormGroup({
    username: new FormControl('Angular'),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  */ // long code
  constructor(private fb: FormBuilder) { }

  alterEmail(){
    return this.registrationForm.get('alternateEmail') as FormArray;
  }

  addControl(){
    this.alterEmail().push(this.fb.control(''))
  }
  registrationForm = this.fb.group({   //short code
      username: ['',[Validators.required,Validators.minLength(4),forbiddenvali]],
      password: [''],
      cpassword: [''],
      email : [''],
      address: this.fb.group({
        city:[''],
        state: ['']
      }),
      alternateEmail: this.fb.array([])

  },{validator: matchPass});


  ngOnInit() {
  }

  getName(){
    this.registrationForm.patchValue({username:'Shazad'});
  }

  onSubmit(){
    console.log(this.registrationForm.value); // make service and make the post req using httpclient
  }

}
