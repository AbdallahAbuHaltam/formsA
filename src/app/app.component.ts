import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) signUpForm:NgForm;
  defaultQuestion:string='teacher';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secret:'',
    question:'',
    gender:''
  }
  submitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.email=this.signUpForm.value.userData.email;
    this.user.secret=this.signUpForm.value.secret;
    this.user.question=this.signUpForm.value.question;
    this.user.gender=this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
