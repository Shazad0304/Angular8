import { Component, OnInit } from '@angular/core';
import { Datas } from '../datas';
import { PostService } from '../post.service';
import { error } from 'util';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public array = ['male','female','rather not to say'];
  userData = new Datas('','shazadshiraz@gmail.com','03042510345','Karachi','Pakistan','male')
  public tick = false;

  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  check(value){
      if(value === "shazad"){
        this.tick = true;

      }
      else{
        this.tick == false;
      }
  }

  onSubmit(){
    console.log(this.userData);
    this.postService.sendData(this.userData)
    .subscribe(data=> console.log('Success',data),error => console.error('error',error)
    )
    
  }

}
