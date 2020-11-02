import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true})  form1:NgForm;
  answer = '';
  genders = ['male','female','others'];
  replaceAll() {
    const suggestedName = 'Superuser';
    this.form1.setValue({
      userData:{
        username: suggestedName,
        email:'@gmail.com'
      },
      secret:'pet',
      questionAnswer: '',
      gender: 'male'
    })

  }
  suggestUserName(){
    this.form1.form.patchValue({
      userData:{
        username:'superUser'
      }
    })
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  //   console.log('-----------------');
  //   console.log(form.value);
  // }
  onSubmit(){
    console.log(this.form1);
  }
  onReset(){
    this.form1.reset();
  }
}
