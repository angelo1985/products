import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myForm?: NgForm;


  constructor(private router: Router) {
    
  }

  goToPage(){
    this.router.navigate(['/recetas-list'])
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    

  }

}
