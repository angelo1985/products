import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myForm?: NgForm;


  constructor() {
    
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    

  }

}
