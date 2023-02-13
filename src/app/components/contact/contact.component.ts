import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  info=new FormGroup({

    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    Subject:new FormControl("",Validators.required),
    Message:new FormControl("")
  })

  Create(){
    console.log(this.info.value)
  }


}
