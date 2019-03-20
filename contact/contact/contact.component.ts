import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup;
  constructor(){
    this.form = new FormGroup({
      $key:new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email,Validators.required]),
      date: new FormControl(''),
      eventName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      text: new FormControl('')
    })

  }





  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);

  }


}



















// this.myForm = formBuilder.group({
//
//   "userName": ['', [Validators.required]],
//   "userEmail": ['', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],
//   "data":['', [Validators.required]],
//   "eventName": ['', [Validators.required]]
// });
